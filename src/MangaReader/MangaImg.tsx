import React, { CSSProperties, useContext } from 'react';
import { ImgIds, urlMapping } from '../ImgUrlConfig';
import OpenModalCtx from './Desktop/OpenModalCtx';

interface MangaImgProps {
  imgId: ImgIds;
  className?: string;
  style?: CSSProperties;
}
export const MangaImg = (props: MangaImgProps) => {
  const { imgId, className, style } = props;
  const url = urlMapping[imgId];
  const openModal = useContext(OpenModalCtx);
  return (
    <img src={url} className={className} style={style} onClick={openModal} />
  );
};
MangaImg.displayName = 'MangaImg';
