import React from 'react';
import s from './ModalWindow.module.scss';
import { ModalProps } from '../types/types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const ModalWindow: React.FC<ModalProps> = ({ onClick, children, heading }) => {
  return (
    <div className={s.modal}>
      <div className={s.wrapper}>
        <header>
          {heading}
          <CloseIcon type="primary" onClick={onClick} />
        </header>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
