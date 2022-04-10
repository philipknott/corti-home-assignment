import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { FlatDataType } from '../types/types';
import { Navigation } from './components/Navigation';
import { Preview } from './components/Preview';
import { AppContext } from './AppContext';

export const App = () => {
  const [selectedFile, setSelectedFile] = useState<FlatDataType | null>(null);

  return (
    <AppContext.Provider value={{ selectedFile, setSelectedFile }}>
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
          <Navigation />
          <Preview />
        </Box>
      </Box>
    </AppContext.Provider>
  );
};
