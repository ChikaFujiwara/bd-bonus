import classNames from 'classnames';
import React from 'react';
import './Switch.css';

interface SwitchProps {
  value: boolean;
  onChange: (val: boolean) => void;
}
export const Switch = (props: SwitchProps) => {
  const { value, onChange } = props;
  return (
    <button
      role="switch"
      className={classNames('switch', {
        'switch-checked': value,
      })}
      onClick={(e) => {
        onChange(!value);
      }}
    >
      <div className="switch-inner" />
      <div className="switch-animation" />
    </button>
  );
};
Switch.displayName = 'Switch';
