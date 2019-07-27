import React from 'react';
import { ImgIds, urlMapping } from '../../ImgUrlConfig';
import './MiniImg.css';
interface MiniImgProps {
  imgId: ImgIds;
}
export const MiniImg = React.memo((props: MiniImgProps) => {
  const { imgId } = props;
  const url = urlMapping[imgId];
  return <img src={url} className="mini-img" />;
});
MiniImg.displayName = 'MiniImg';
