import React, { PropsWithChildren } from 'react';

const OrderTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text text_type_main-medium mb-2">{children}</h2>;
};

export default OrderTitle;
