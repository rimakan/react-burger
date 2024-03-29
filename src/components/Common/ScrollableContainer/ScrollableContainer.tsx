import React from 'react';
import s from './ScrollableContainer.module.scss';
import cn from 'classnames';

interface ScrollableContainerProps extends React.PropsWithChildren {
  variant: 'primary' | 'secondary' | 'tertiary';
  onScroll?: () => void;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({ variant, children, onScroll }) => {
  const classNames = cn(s.scrollableContainer, 'custom-scroll', {
    [s.scrollableContainer_primary]: variant === 'primary',
    [s.scrollableContainer_secondary]: variant === 'secondary',
    [s.scrollableContainer_tertiary]: variant === 'tertiary',
  });
  return (
    <div className={classNames} onScroll={onScroll}>
      {children}
    </div>
  );
};

export default ScrollableContainer;
