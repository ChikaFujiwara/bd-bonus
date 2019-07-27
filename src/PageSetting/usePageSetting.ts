import { useContext, useMemo } from 'react';
import { ImgConfig, ImgIds } from '../ImgUrlConfig';
import { PageSettingContext } from './Context';
const { conver, first, end } = ImgConfig;

const flattern = (arr: string[][]) => {
  return ([] as string[]).concat.apply([], arr);
};

export const usePageSetting = () => {
  const { setting, setSetting } = useContext(PageSettingContext);
  const imgIds = useMemo(() => {
    const middlePages = flattern(setting);
    return [first, ...middlePages, end] as ImgIds[];
  }, [setting]);
  return {
    imgIds,
    setSetting,
  };
};
