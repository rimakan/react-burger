import React from 'react';

export interface ModalProps extends React.PropsWithChildren {
  heading?: string;
  className?: string;
  onClick: () => void;
}
