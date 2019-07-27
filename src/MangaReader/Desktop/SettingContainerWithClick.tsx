import React, { ReactNode, useCallback, useState } from 'react';
import { PageSettingModal } from '../../PageSetting/SettingLayer/PageSettingModal';
import { ClickMark } from '../ClickMark';
import OpenModalCtx from './OpenModalCtx';
interface SettingContainerWithClickProps {
  children: ReactNode;
}
export const SettingContainerWithClick = (
  props: SettingContainerWithClickProps
) => {
  const { children } = props;
  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const onModalClose = useCallback(() => {
    setSettingModalOpen(false);
  }, []);
  const onModalOpen = useCallback(() => {
    setSettingModalOpen(true);
  }, []);
  return (
    <>
      <OpenModalCtx.Provider value={onModalOpen}>
        {children}
      </OpenModalCtx.Provider>
      <PageSettingModal onClose={onModalClose} show={settingModalOpen} />
    </>
  );
};
SettingContainerWithClick.displayName = 'SettingContainerWithClick';
