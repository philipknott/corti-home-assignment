import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import { NavigationItems } from './NavigationItems';

export const Navigation = () => {
  return (
    <Box sx={{ padding: '20px', overflow: 'auto' }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<FolderOpen />}
        defaultExpandIcon={<Folder />}
      >
        <NavigationItems itemId="" />
      </TreeView>
    </Box>
  );
};
