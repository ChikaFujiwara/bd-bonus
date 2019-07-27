import React from 'react';
import { DesktopMangaReader } from './Desktop';
export const MangaReader = React.memo(() => {
  return <DesktopMangaReader />;
});
MangaReader.displayName = 'MangaReader';
