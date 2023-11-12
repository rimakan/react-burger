import React from 'react';
import { Modal } from '../../../uikit';
import ExtendedOrderDetails from '../ExtendedOrderDetails/ExtendedOrderDetails';
import { useDispatch, useSelector } from '../../../../hooks';
import { closeOrderDialog } from '../../../../store/reactBurger/orderFeedSlice/orderFeedActionsSlice';

const ExtendedOrderDialog: React.FC = () => {
  const order = useSelector(({ reactBurger }) => reactBurger.orderFeedActions.order);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeOrderDialog());
  };

  return (
    <span>
      {order && (
        <Modal onClick={handleClick}>
          <ExtendedOrderDetails order={order} isModal={true} />
        </Modal>
      )}
    </span>
  );
};

export default ExtendedOrderDialog;
