import React from 'react';

export interface ModalProps extends React.PropsWithChildren {
  heading?: React.ReactNode;
  className?: string;
  onClick: () => void;
}
