import React, { useState } from 'react';
import { usePageSetting } from '../../PageSetting/usePageSetting';
import ImageCover from '../Cover';
import './index.css';
import { DesktopScrollReader } from './ScrollReader';
export const DesktopMangaReader = React.memo(() => {
  const { imgIds } = usePageSetting();
  const [route, setRoute] = useState('cover');
  return (
    <div id="manga-main">
      {route === 'cover' ? (
        <ImageCover
          onGenerate={() => {
            setRoute('content');
          }}
        />
      ) : (
        <DesktopScrollReader imgIds={imgIds} />
      )}
    </div>
  );
});
DesktopMangaReader.displayName = 'DesktopMangaReader';
