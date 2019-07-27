import arrayMove from 'array-move';
import React, { useCallback } from 'react';
import { SortEndHandler } from 'react-sortable-hoc';
import { ImgIds } from '../../ImgUrlConfig';
import './index.css';
import { SortablePageGroup } from './PageGroup';
interface SettingLayerProps {
  settings: ImgIds[][];
  setSettings: (newSetting: ImgIds[][]) => void;
}
const toggleGroup = (group: ImgIds[]) => {
  const [a, b] = group;
  return [b, a];
};

export const SettingLayer = React.memo((props: SettingLayerProps) => {
  const { setSettings, settings } = props;
  const onSortEnd: SortEndHandler = useCallback(
    (arg) => {
      const { oldIndex, newIndex } = arg;
      const newSettings = arrayMove(settings, oldIndex, newIndex);
      setSettings([...newSettings]);
    },
    [settings, setSettings]
  );
  const onToggleGroup = (idx: number) => {
    settings[idx] = toggleGroup(settings[idx]);
    setSettings([...settings]);
  };
  return (
    <div id="setting-layer">
      <SortablePageGroup
        settings={settings}
        onSortEnd={onSortEnd}
        onToggleGroup={onToggleGroup}
        lockAxis="y"
        helperClass="dragging-item"
        useDragHandle={true}
      />
    </div>
  );
});
SettingLayer.displayName = 'SettingLayer';
