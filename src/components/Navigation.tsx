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
  setSelectedFile,
  expanded,
  setExpanded }: {
    setSelectedFile: (payload: TreeLeafType) => void,
    expanded: string[],
    setExpanded: (payload: string[]) => void
  }) => {

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

  items?.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)

  const handleNodeSelect = (event: React.SyntheticEvent, nodeId: string) => {
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
    const item = getItemFromId(items!, nodeId)
    setSelectedFile(item!)
  }

  return (
    <Box sx={{ padding: '20px', overflow: 'auto' }}>
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