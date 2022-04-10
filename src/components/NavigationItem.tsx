import { useContext } from 'react';
import Image from '@mui/icons-material/ImageOutlined';
import InsertDriveFile from '@mui/icons-material/InsertDriveFileOutlined';
import TreeItem from '@mui/lab/TreeItem';

import { FlatDataType } from '../../types/types';
import { AppContext } from '../AppContext';
import { NavigationItems } from './NavigationItems';

export const NavigationItem = ({ item }: { item: FlatDataType }) => {
  const appContext = useContext(AppContext);
  let icon = null;

  switch (item.type) {
    case 'doc':
      icon = <InsertDriveFile />;
      break;
    case 'image':
      icon = <Image />;
      break;
  }

  return (
    <TreeItem
      nodeId={item.id}
      label={item.name}
      icon={icon}
      onClick={() => {
        appContext.setSelectedFile(item);
      }}
    >
      {item.type === 'folder' && <NavigationItems itemId={item.id} />}
    </TreeItem>
  );
};
