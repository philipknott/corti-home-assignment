import Grid from '@mui/material/Grid'
import { TreeLeafType } from '../../types/types';
import { GridNavigationItem } from './GridNavigationItem';

export const GridNavigationItems = ({
    selectedFile, setSelectedFile, setExpanded
}: {
    selectedFile: TreeLeafType,
    setSelectedFile: (payload: TreeLeafType) => void,
    setExpanded: (payload: string[]) => void
}) => {
    return (
        <Grid container spacing={2}>
            {selectedFile.children?.map(item => (
                <GridNavigationItem
                    key={item.id}
                    item={item}
                    setSelectedFile={setSelectedFile}
                    setExpanded={setExpanded}
                />
            ))}
            {selectedFile.children?.length === 0 && (
                <p style={{ color: 'grey' }}>No Folder Content</p>
            )}
        </Grid>
    )
}