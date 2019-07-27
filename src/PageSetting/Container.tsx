import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { ImgIds } from '../ImgUrlConfig';
import { PageSettingContext } from './Context';
import { PageSettingStore } from './Store';
interface PageSettingContainerProps {
  children: ReactNode;
}
const _shuffle = (a: ImgIds[][]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < a.length; i++) {
    const elem = a[i];
    if (Math.random() > 0.5) {
      [elem[0], elem[1]] = [elem[1], elem[0]];
    }
  }
  return [...a];
};
export const PageSettingContainer = (props: PageSettingContainerProps) => {
  const { children } = props;
  const [setting, _setSetting] = useState<ImgIds[][]>(() =>
    PageSettingStore.getSetting()
  );
  const setSetting = useCallback((newSetting: ImgIds[][]) => {
    _setSetting(newSetting);
    PageSettingStore.saveSetting(newSetting);
  }, []);
  const ctxValue = useMemo(() => {
    const shuffle = () => {
      setSetting(_shuffle(setting));
    };
    return {
      setSetting,
      setting,
      shuffle,
    };
  }, [setting]);
  return (
    <PageSettingContext.Provider value={ctxValue}>
      {children}
    </PageSettingContext.Provider>
  );
};
PageSettingContainer.displayName = 'PageSettingContainer';
