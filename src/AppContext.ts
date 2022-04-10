import { createContext } from 'react';

import { TreeLeafType } from '../types/types';

export const AppContext = createContext<{
  selectedFile: TreeLeafType | null;
  setSelectedFile: (payload: TreeLeafType | null) => void;
  expanded: string[];
  setExpanded: (payload: string[]) => void;
}>({
  selectedFile: null,
  setSelectedFile: () => { },
  expanded: [],
  setExpanded: () => { }
});
