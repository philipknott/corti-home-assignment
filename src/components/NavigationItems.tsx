import TreeItem from '@mui/lab/TreeItem';
import { TreeLeafType } from '../../types/types';

export const NavigationItems = ({ items }: { items: TreeLeafType[] | undefined }) => {
  const renderTree = (item: TreeLeafType) => {
    return (
      <TreeItem key={item.id} nodeId={item.id} label={item.name}>
        {item.children && item.children.map(child => renderTree(child))}
      </TreeItem>
    )
  }

  return (
    <>
      {items?.map(item => renderTree(item))}
    </>
  )
};
