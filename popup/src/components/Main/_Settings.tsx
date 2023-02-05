import React, { useState } from "react";

import icons from "../../utils/_icons";
import SettingsInterface from "../../interfaces/settings.interface";

const SettingsButton = (props: {
  tag: string;
  title: string;
  subtitle: string;
  isBlocked: boolean;
  isActive: boolean;
  onClickMethod?: Function;
}) => {
  const [_isActive, setState] = useState(props.isActive);
  return (
    <div className={`Button Button-${props.tag}`}>
      <div className="Button-CheckBox">
        <div
          className={`Button-CheckBox_state ${
            props.isBlocked ? "_blocked" : _isActive ? "_active" : "_unActive"
          }`}
          onClick={() => {
            setState(!_isActive);
          }}
          role="checkbox"
        >
          <icons.CheckBox
            className="IconButton-checkBox"
            isActive={props.isBlocked || _isActive}
            title=""
          />
        </div>
      </div>
      <div className="Button-Text">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default class Settings extends React.Component<{
  settings: SettingsInterface;
}> {
  constructor(props: { settings: SettingsInterface }) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="Content">
        <div className="SettingsField">
          <SettingsButton
            tag="mode"
            title="Заблоченная кнопка"
            subtitle=""
            isBlocked={true}
            isActive={false}
            onClickMethod={() => {}}
          />
          <SettingsButton
            tag="isBlurMode"
            title="Неактивная кнопка"
            subtitle=""
            isBlocked={false}
            isActive={false}
            onClickMethod={() => {}}
          />
          <SettingsButton
            tag="isHideOnlyInChats"
            title="Активная кнопка"
            subtitle=""
            isBlocked={false}
            isActive={true}
            onClickMethod={() => {}}
          />
          <SettingsButton
            tag="isAutoCensorship"
            title="Продвинутый режим"
            subtitle=""
            isBlocked={true}
            isActive={false}
            onClickMethod={() => {}}
          />
        </div>
      </div>
    );
  }
}
