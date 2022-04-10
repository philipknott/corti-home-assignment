import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { TreeLeafType } from '../types/types';
import { Navigation } from './components/Navigation';
import { Preview } from './components/Preview';

export const App = () => {
  const [selectedFile, setSelectedFile] = useState<TreeLeafType | null>(null);
  const [expanded, setExpanded] = useState<Array<string>>([])

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <AppBar position="sticky">
        <Toolbar variant="regular">
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Home Assignment
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, auto) 1fr',
          gridGap: '20px',
          height: '100%',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Navigation
          setSelectedFile={setSelectedFile}
          expanded={expanded}
          setExpanded={setExpanded} />
        <Preview
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setExpanded={setExpanded} />
      </Box>
    </Box>
  );
};