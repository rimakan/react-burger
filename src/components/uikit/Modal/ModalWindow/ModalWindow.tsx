import React from 'react';
import s from './ModalWindow.module.scss';
import { ModalProps } from '../types/types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

const ModalWindow: React.FC<ModalProps> = ({ onClick, children, heading }) => {
  const headerClassName = cn(s.modalHeader, {
    [s.modalHeader_withoutHeading]: !heading,
  });
  return (
    <div className={s.modal}>
      <div className={s.wrapper}>
        <header className={headerClassName}>
          {heading}
          <span onClick={onClick} data-testid="closeModal">
            <CloseIcon type="primary" />
          </span>
        </header>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
