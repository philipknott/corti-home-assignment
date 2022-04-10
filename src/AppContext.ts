import { createContext } from 'react';

import { FlatDataType } from '../types/types';

export const AppContext = createContext<{
  selectedFile: FlatDataType | null;
  setSelectedFile: (payload: FlatDataType | null) => void;
}>({ selectedFile: null, setSelectedFile: () => {} });
