import React, { useCallback, useState } from 'react';
import { PageSettingModal } from '../../PageSetting/SettingLayer/PageSettingModal';
import settingLogo from './settings.svg';

export const SettingSidebar = React.memo(() => {
  const [settingModalOpen, setSettingModalOpen] = useState(true);
  const onModalClose = useCallback(() => {
    setSettingModalOpen(false);
  }, []);
  return (
    <React.Fragment>
      <div>
        <img
          src={settingLogo}
          onClick={(e) => {
            e.preventDefault();
            setSettingModalOpen(true);
          }}
        />
        <PageSettingModal onClose={onModalClose} show={settingModalOpen} />
      </div>
    </React.Fragment>
  );
});
SettingSidebar.displayName = 'SettingSidebar';
