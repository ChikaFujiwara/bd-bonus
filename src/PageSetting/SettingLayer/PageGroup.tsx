import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { ImgIds } from '../../ImgUrlConfig';
import { SortableSettingLayerPage } from './Page';
interface PageGroupProps {
  settings: ImgIds[][];
  onToggleGroup: (idx: number) => void;
}
const getKey = (groups: ImgIds[]) => {
  return [...groups].sort().join(',');
};

export const PageGroup = (props: PageGroupProps) => {
  const { settings, onToggleGroup } = props;
  return (
    <div className="page-setting-group">
      {settings.map((group, idx) => {
        return (
          <SortableSettingLayerPage
            key={getKey(group)}
            idx={idx}
            index={idx}
            groups={group}
            onToggleGroup={onToggleGroup}
          />
        );
      })}
    </div>
  );
};
PageGroup.displayName = 'PageGroup';

export const SortablePageGroup = SortableContainer(PageGroup);
SortablePageGroup.displayName = 'SortablePageGroup';
