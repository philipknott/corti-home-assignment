import InsertDriveFile from '@mui/icons-material/InsertDriveFileOutlined';
import Image from '@mui/icons-material/ImageOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import { FlatDataType } from '../../types/types';

export const GridNavigationItem = ({ item }: { item: FlatDataType }) => {
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
        <Grid item xs={2}>
            <Box sx={{ p: 1, border: '1px solid grey' }}>
                {icon}
                <p>{item.name}</p>
            </Box>
        </Grid>
    )
}