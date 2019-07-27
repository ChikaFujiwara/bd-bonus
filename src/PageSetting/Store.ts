import { ImgConfig, ImgIds } from '../ImgUrlConfig';

const defaultSetting = ImgConfig.pages as ImgIds[][];

const PAGE_SETTING_KEY = 'PAGE_SETTING';

const isValidSetting = (pages: string[][]) => {
  return true;
};

const getSetting = (): ImgIds[][] => {
  const saved = localStorage.getItem(PAGE_SETTING_KEY);
  if (!saved) {
    return defaultSetting;
  }
  try {
    const setting = JSON.parse(saved) as ImgIds[][];
    if (isValidSetting(setting)) {
      return setting;
    } else {
      return defaultSetting;
    }
  } catch (err) {
    return defaultSetting;
  }
};

const saveSetting = (setting: ImgIds[][]) => {
  const str = JSON.stringify(setting);
  localStorage.setItem(PAGE_SETTING_KEY, str);
};
export const PageSettingStore = {
  getSetting,
  saveSetting,
};
