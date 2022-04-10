import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import { NavigationItems } from './NavigationItems';
import Alert from '@mui/material/Alert'
import { Action, useQuery } from 'react-fetching-library';
import { TreeLeafType } from '../../types/types';
import LinearProgress from '@mui/material/LinearProgress'

export const Navigation = () => {
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

  items?.sort((a, b) => a.name > b.name ?  1 : -1)

  return (
    <Box sx={{ padding: '20px', overflow: 'auto' }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<FolderOpen />}
        defaultExpandIcon={<Folder />}
      >
        <NavigationItems items={items} />
      </TreeView>
    </Box>
  );
};
