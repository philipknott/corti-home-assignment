import { useRef, useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import Alert from '@mui/material/Alert'
import { Action, useQuery } from 'react-fetching-library';
import LinearProgress from '@mui/material/LinearProgress'

import { TreeLeafType } from '../../types/types';
import { NavigationItems } from './NavigationItems';

export const Navigation = ({
  selectedFile,
  setSelectedFile }: {
    selectedFile: TreeLeafType | null,
    setSelectedFile: (payload: TreeLeafType | null) => void
  }) => {
  const [expanded, setExpanded] = useState<string[]>([])
  const history = useRef<string[]>([])

  // Load data from API
  const getNavigationTree: Action = {
    method: 'GET',
    endpoint: `/api/v1/tree/`
  };

  const {
    payload: items,
    loading,
    error,
  } = useQuery<TreeLeafType[]>(getNavigationTree);

  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return <Alert severity="error">Failed to load!</Alert>;
  }

  // Ensures that history is up to date when the selected file changes
  if (history.current[history.current.length - 1] !== selectedFile?.id) {
    history.current.push(selectedFile ? selectedFile.id : '')
  }

  // Expand a folder when it's selected from main window
  if (selectedFile?.type === 'folder' && !expanded.includes(selectedFile.id)) {
    setExpanded([...expanded, selectedFile.id])
  }

  /* Triggered when back button is pressed. */
  const handleBackButton = () => {
    if (history.current.length === 0) { return }

    // Handles re-collapsing of folders
    const removedItemId = history.current.pop()!
    if (!history.current.includes(removedItemId) && expanded.includes(removedItemId)) {
      setExpanded(expanded.filter(e => e !== removedItemId))
    }

    // Re-selects previous file
    const lastSelectedItemId = history.current[history.current.length - 1]
    const lastSelectedItem = getItemFromId(items!, lastSelectedItemId)
    if (lastSelectedItem) {
      setSelectedFile(lastSelectedItem)
    } else {
      setSelectedFile(null)
    }
  }

  /* Triggered when a file is selected in the navigation menu. */
  const handleNodeSelect = (event: React.SyntheticEvent, nodeId: string) => {
    if (nodeId === selectedFile?.id) {
      // Deselect file that's already selected
      setSelectedFile(null)
    } else {
      // Select new file
      const item = getItemFromId(items!, nodeId)
      setSelectedFile(item!)
    }
  }

  return (
    <Box sx={{ padding: '20px', overflow: 'auto' }}>
      <Button
        variant="contained"
        onClick={handleBackButton}>Back</Button>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<FolderOpen />}
        defaultExpandIcon={<Folder />}
        onNodeSelect={handleNodeSelect}
        onNodeToggle={(_, ids) => setExpanded(ids)}
        expanded={expanded}
      >
        <NavigationItems items={items} />
      </TreeView>
    </Box>
  );
};

/* Helper function. Returns the file/folder with a matching id, or undefined if it doesn't exist. */
const getItemFromId = (items: TreeLeafType[], id: string): TreeLeafType | undefined => {
  for (const item of items) {
    if (item.id === id) { return item; }
    if (item.type === 'folder') {
      const recItem = getItemFromId(item.children, id)
      if (recItem) return recItem
    }
  }
  return undefined
}