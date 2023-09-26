import React, { useEffect } from 'react';
import s from './ModalOverlay.module.scss';
import { ModalProps } from '../types/types';

const ModalOverlay: React.FC<ModalProps> = ({ onClick, children }) => {
  useEffect(() => {
    const closeModal = (event: any) => {
      if (event.key === 'Escape' && event) {
        onClick?.();
      }
    };
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  return <div className={s.modalOverlay} onClick={onClick} />;
};

export default ModalOverlay;
