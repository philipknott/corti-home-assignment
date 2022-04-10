import Alert from '@mui/material/Alert';
import { Action, useQuery } from 'react-fetching-library';
import LinearProgress from '@mui/material/LinearProgress';
import TreeItem from '@mui/lab/TreeItem';
import { FlatDataType } from '../../types/types';
import { NavigationItem } from './NavigationItem';

export const NavigationItems = ({ itemId }: { itemId: string }) => {
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
    <>
      {items?.map((item) => {
        return <NavigationItem key={item.id} item={item} />;
      })}
      {!items?.length && (
        <TreeItem
          nodeId={itemId + 'no-content'}
          label={'No Content'}
          disabled
        />
      )}
    </>
  );
};
