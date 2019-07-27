import classNames from 'classnames';
import React, { ReactNode, useCallback, useState } from 'react';
import './SettingContainer.css';
import { SettingSidebar } from './SettingSidebar';
interface DesktopSettingContainerProps {
  children: ReactNode;
  className?: string;
}

const useShowSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const onMouseMove = useCallback(
    (event: React.MouseEvent) => {
      const { clientX } = event;
      if (clientX < 100 && !showSidebar) {
        setShowSidebar(true);
      } else if (clientX >= 100 && showSidebar) {
        setShowSidebar(false);
      }
    },
    [showSidebar]
  );
  return {
    onMouseMove,
    showSidebar,
  };
};

export const DesktopSettingContainer = React.memo(
  (props: DesktopSettingContainerProps) => {
    const { children, className } = props;
    const { onMouseMove, showSidebar } = useShowSidebar();

    return (
      <div className={className} onMouseMove={onMouseMove}>
        <div
          id="sidebar"
          className={classNames({
            show: showSidebar,
          })}
        >
          <SettingSidebar />
        </div>
        {children}
      </div>
    );
  }
);
DesktopSettingContainer.displayName = 'DesktopSettingContainer';
