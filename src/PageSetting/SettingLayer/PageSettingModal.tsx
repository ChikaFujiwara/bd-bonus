import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { PageSettingContext } from '../Context';
import { SettingLayer } from './index';
import './PageSettingModal.css';
interface PageSettingModalProps {
  onClose: () => void;
  show: boolean;
}

const useModal = (show: boolean) => {
  const backdrop = useMemo(() => {
    const backdropEl = document.createElement('div');
    backdropEl.classList.add('modal-backdrop', 'show');
    return backdropEl;
  }, []);
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
      document.body.appendChild(backdrop);
    } else {
      document.body.classList.remove('modal-open');
      if (document.body.contains(backdrop)) {
        document.body.removeChild(backdrop);
      }
    }
  }, [show]);
  const el = useMemo(() => {
    return document.createElement('div');
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

export const PageSettingModal = React.memo((props: PageSettingModalProps) => {
  const { onClose, show } = props;
  const { el } = useModal(show);
  const { setting, setSetting } = useContext(PageSettingContext);
  const _settings = setting;
  const _setSettings = setSetting;
  // const [_settings, _setSettings] = useState<ImgIds[][]>([]);
  // useEffect(() => {
  //   if (!show) {
  //     return;
  //   }
  //   _setSettings(setting);
  // }, [setting, show]);
  const onSave = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      // setSetting(_settings);
      onClose();
    },
    [
      onClose,
      // _settings
    ]
  );
  return ReactDOM.createPortal(
    <div
      className={classNames('modal fade', {
        show,
      })}
      style={
        !show
          ? {
              display: 'none',
            }
          : {}
      }
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">按住中间横杠拖动</h5>
            <button className="close" onClick={onClose}>
              <span>×</span>
            </button>
          </div>
          <div className="modal-body">
            <SettingLayer settings={_settings} setSettings={_setSettings} />
          </div>
          <div className="modal-footer">
            <button type="button" className="success" onClick={onSave}>
              确定
            </button>
          </div>
        </div>
      </div>
    </div>,
    el
  );
});
PageSettingModal.displayName = 'PageSettingModal';
