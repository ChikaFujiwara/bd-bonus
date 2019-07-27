import React, { useCallback, useMemo } from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { ImgIds } from '../../ImgUrlConfig';
import { MiniImg } from './MiniImg';
import './Page.css';
import { Switch } from './Switch';
interface SettingLayerPageProps {
  idx: number;
  groups: ImgIds[];
  onToggleGroup: (idx: number) => void;
}
const checkIsToggled = (groups: ImgIds[]) => {
  const [a, b] = groups;
  return a > b;
};

const DraggableHandler = SortableHandle(() => {
  return (
    <div className="draggable-handler">
      <div className="draggable-handler-content" />
    </div>
  );
});
DraggableHandler.displayName = 'DraggableHandler';

export const SettingLayerPage = (props: SettingLayerPageProps) => {
  const { idx, groups, onToggleGroup } = props;
  const val = useMemo(() => {
    return checkIsToggled(groups);
  }, [groups.join(',')]);
  const onChange = useCallback(() => {
    onToggleGroup(idx);
  }, [idx, onToggleGroup]);

  return (
    <div className="page-setting">
      <div className="mini-imgs">
        {groups.map((imgId) => {
          return <MiniImg imgId={imgId} key={imgId} />;
        })}
      </div>
      <DraggableHandler />
      <div className="btn-group">
        <Switch value={val} onChange={onChange} />
      </div>
    </div>
  );
};
SettingLayerPage.displayName = 'SettingLayerPage';

export const SortableSettingLayerPage = SortableElement(SettingLayerPage);
