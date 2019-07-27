import React from 'react';
import { ImgIds } from '../ImgUrlConfig';

interface PageSettingContextType {
  setting: ImgIds[][];
  setSetting: (setting: ImgIds[][]) => void;
  shuffle: () => void;
}

export const PageSettingContext = React.createContext<PageSettingContextType>(
  null as any
);
