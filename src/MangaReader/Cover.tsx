import React, { useContext, useEffect, useRef } from 'react';
import { coverImgUrl, ImgConfig, ImgIds, urlMapping } from '../ImgUrlConfig';
import { PageSettingContext } from '../PageSetting/Context';
import './Cover.css';
const { conver } = ImgConfig;

const ImageCover = ({ onGenerate }: { onGenerate: () => void }) => {
  const coverUrl = urlMapping[conver as ImgIds];
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const { shuffle } = useContext(PageSettingContext);
  const adjustElem = () => {
    const elem = titleContainerRef.current;
    if (!elem) {
      return;
    }
    try {
      const rect = elem.getBoundingClientRect();
      const { width } = rect;
      const height = (width / 1000) * 351;
      elem.style.height = height + 'px';
    } catch (err) {
      return;
    }
  };
  useEffect(() => {
    window.addEventListener('resize', adjustElem);
    return () => {
      window.removeEventListener('resize', adjustElem);
    };
  }, []);

  const onRef = (elem: HTMLDivElement | null) => {
    titleContainerRef.current = elem;
    adjustElem();
  };
  return (
    <div id="cover">
      <div id="title-container" ref={onRef}>
        <img className="subtit slide-in-3" src={coverImgUrl.subtit} />
        <img className="tit slide-in-2" src={coverImgUrl.tit} />
        <img className="subtit2 slide-in-3" src={coverImgUrl.subtit2} />
        <img
          className="butt fade-in"
          src={coverImgUrl.butt}
          onClick={(e) => {
            shuffle();
            onGenerate();
          }}
        />
        <img className="cnb slide-in-3" src={coverImgUrl.cnb} />
      </div>

      <img id="cover-img" className="slide-in-1" src={coverUrl} />
    </div>
  );
};

ImageCover.displayName = 'ImageCover';
export default ImageCover;
