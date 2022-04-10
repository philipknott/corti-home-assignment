import Grid from '@mui/material/Grid'
import { TreeLeafType } from '../../types/types';
import { GridNavigationItem } from './GridNavigationItem';

export const GridNavigationItems = ({
    selectedFile, setSelectedFile
}: {
    selectedFile: TreeLeafType,
    setSelectedFile: (payload: TreeLeafType) => void
}) => {
    return (
        <Grid container spacing={2}>
            {selectedFile.children?.map(item => (
                <GridNavigationItem
                    key={item.id}
                    item={item}
                    setSelectedFile={setSelectedFile}
                />
            ))}
            {selectedFile.children?.length === 0 && (
                <p style={{ color: 'grey' }}>No Folder Content</p>
            )}
        </Grid>
    )
}