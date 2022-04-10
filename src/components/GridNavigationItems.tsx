import Grid from '@mui/material/Grid'
import { FlatDataType } from '../../types/types';
import { Action, useQuery } from 'react-fetching-library';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import { GridNavigationItem } from './GridNavigationItem';

export const GridNavigationItems = ({ itemId }: { itemId: string }) => {
    const getNavigationTree: Action = {
        method: 'GET',
        endpoint: `/api/v1/tree-flat/${itemId}`,
    };

    const {
        payload: items,
        loading,
        error,
    } = useQuery<FlatDataType[]>(getNavigationTree);

    if (loading) {
        return <LinearProgress />;
    }

    if (error) {
        return <Alert severity="error">Failed to load!</Alert>;
    }

    return (
        <Grid container spacing={2}>
            {items?.map((item) => {
                return <GridNavigationItem key={item.id} item={item} />;
            })}
        </Grid>
    );
}