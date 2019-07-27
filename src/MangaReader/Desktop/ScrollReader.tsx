import React, { useContext } from 'react';
import { coverImgUrl, ImgIds } from '../../ImgUrlConfig';
import { PageSettingContext } from '../../PageSetting/Context';
import { MangaImg } from '../MangaImg';
import { SettingContainerWithClick } from './SettingContainerWithClick';
interface DesktopScrollReaderProps {
  imgIds: ImgIds[];
}
export const DesktopScrollReader = React.memo(
  (props: DesktopScrollReaderProps) => {
    const { imgIds } = props;
    const { shuffle } = useContext(PageSettingContext);
    return (
      <div className="scroll-reader">
        <SettingContainerWithClick>
          {imgIds.map((x) => {
            return <MangaImg key={x} imgId={x} />;
          })}
        </SettingContainerWithClick>
        <img
          id="re-gen-btn"
          src={coverImgUrl.butt2}
          onClick={(e) => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            shuffle();
          }}
        />
      </div>
    );
  }
);
DesktopScrollReader.displayName = 'DesktopScrollReader';
