import React from 'react';
import s from './AppHeaderItem.module.scss';

interface AppHeaderItemProps {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const AppHeaderItem: React.FC<AppHeaderItemProps> = ({ title, icon }) => {
  const className = 'text text_type_main-default';

  return (
    <div className={`pl-5 pr-5 pt-4 pb-4 ${s.appHeaderItem}`}>
      <i className={className}>{icon}</i>
      <span className={className}>{title}</span>
    </div>
  );
};

export default AppHeaderItem;
