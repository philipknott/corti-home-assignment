import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { GridNavigationItems } from './GridNavigationItems'

import { AppContext } from '../AppContext';

export const Preview = () => {
  const { selectedFile } = useContext(AppContext);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h2" component="h2">
        Preview
      </Typography>

      {(selectedFile?.type === 'image' || selectedFile?.type === 'doc') && (
        <List sx={{ width: '100%', maxWidth: 360 }}>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Name" secondary={selectedFile.name} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="type" secondary={selectedFile.type} />
          </ListItem>
        </List>
      )}

      {selectedFile?.type === 'folder' && (
        <div>
          <p>{selectedFile.name}</p>
          <GridNavigationItems itemId={selectedFile.id} />
        </div>
      )}
    </Box>
  );
};
