import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavigationLink.module.scss';
import cn from 'classnames';

interface NavigationLinkProps extends React.PropsWithChildren {
  to: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ to, children, isActive, className, onClick }) => {
  const classes = cn(s.navigationLink, className, {
    [s.navigationLink_active]: isActive,
  });
  return (
    <Link className={classes} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavigationLink;
