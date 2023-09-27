import { createPortal } from 'react-dom';
import { ModalProps } from './types/types';
import ModalWindow from './ModalWindow/ModalWindow';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const overlay: HTMLElement = document.getElementById('overlay')!;

const Modal: React.FC<ModalProps> = ({ onClick, children, heading, className }) => {
  return (
    <>
      {createPortal(
        <>
          <ModalOverlay onClick={onClick} />
          <ModalWindow onClick={onClick} heading={heading} className={className}>
            {children}
          </ModalWindow>
        </>,
        overlay,
      )}
    </>
  );
};

export default Modal;
