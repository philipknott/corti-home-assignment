import TreeItem from '@mui/lab/TreeItem';
import Image from '@mui/icons-material/ImageOutlined';
import InsertDriveFile from '@mui/icons-material/InsertDriveFileOutlined';

import { TreeLeafType } from '../../types/types';

export const NavigationItems = ({ items }: { items: TreeLeafType[] | undefined }) => {
  const renderTree = (item: TreeLeafType) => {
    let icon = null
    switch (item.type) {
      case 'doc':
        icon = <InsertDriveFile />
        break;
      case 'image':
        icon = <Image />
        break;
    }

    return (
      <TreeItem
        key={item.id}
        nodeId={item.id}
        label={item.name}
        icon={icon}
      >
        {item.type === 'folder' && item.children
          .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
          .map(child => renderTree(child))}

        {item.children?.length === 0 && (
          <TreeItem
            nodeId={item.id + 'no-content'}
            label={'No Content'}
            disabled
          />
        )}
      </TreeItem>
    )
  }

  return (
    <>
      {items!
        .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
        .map(item => renderTree(item))}
    </>
  )
};