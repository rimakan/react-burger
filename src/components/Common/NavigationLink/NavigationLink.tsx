import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavigationLink.module.scss';
import cn from 'classnames';

interface NavigationLinkProps extends React.PropsWithChildren {
  to: string;
  isActive: boolean;
  className?: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ to, children, isActive, className }) => {
  const classes = cn(s.navigationLink, className, {
    [s.navigationLink_active]: isActive,
  });
  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
};

export default NavigationLink;
