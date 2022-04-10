import { useContext } from 'react';
import InsertDriveFile from '@mui/icons-material/InsertDriveFileOutlined';
import Image from '@mui/icons-material/ImageOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import { FlatDataType } from '../../types/types';
import { AppContext } from '../AppContext';

export const GridNavigationItem = ({ item }: { item: FlatDataType }) => {
    const appContext = useContext(AppContext);
    let icon = null;

    switch (item.type) {
        case 'doc':
            icon = <InsertDriveFile fontSize="large" />;
            break;
        case 'image':
            icon = <Image fontSize="large" />;
            break;
        case 'folder':
            icon = <FolderIcon fontSize="large" />;
            break;
    }

    return (
        <Grid item xs={2} onClick={() => appContext.setSelectedFile(item)}>
            <Box sx={{p: 1, border: '1px solid grey', ":hover": { boxShadow: 6 } }}>
                {icon}
                <p>{item.name}</p>
            </Box>
        </Grid>

    )
}