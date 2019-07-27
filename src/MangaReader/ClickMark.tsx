import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import './ClickMark.css';
interface ClickMarkProps {
  onClick: React.MouseEventHandler;
}
const useClickMark = () => {
  const el = useMemo(() => {
    const div = document.createElement('div');
    return div;
  }, []);
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);
  return {
    el,
  };
};
export const ClickMark = (props: ClickMarkProps) => {
  const { onClick } = props;
  const { el } = useClickMark();
  return ReactDOM.createPortal(<div id="click-mark" onClick={onClick} />, el);
};
ClickMark.displayName = 'ClickMark';
