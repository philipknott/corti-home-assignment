import InsertDriveFile from '@mui/icons-material/InsertDriveFileOutlined';
import Image from '@mui/icons-material/ImageOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import { TreeLeafType } from '../../types/types';

export const GridNavigationItem = ({
    item, setSelectedFile
}: {
    item: TreeLeafType,
    setSelectedFile: (payload: TreeLeafType) => void,
}) => {
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
        <Grid item xs={3} onClick={() => setSelectedFile(item)}>
            <Box sx={{ p: 2, border: '1px solid grey', ":hover": { boxShadow: 6 } }}>
                {icon}
                <p>{item.name}</p>
            </Box>
        </Grid>
    )
}