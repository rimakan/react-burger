import React, { useMemo } from 'react';
import { Modal } from '../../../uikit';
import ExtendedOrderDetails from '../ExtendedOrderDetails/ExtendedOrderDetails';
import { useDispatch, useSelector } from '../../../../hooks';
import { closeOrderDialog } from '../../../../store/reactBurger/orderFeedSlice/orderFeedActionsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const ExtendedOrderDialog: React.FC = () => {
  const order = useSelector(({ reactBurger }) => reactBurger.orderFeedActions.order);
  const orderNumber = useMemo(() => `#${order?.number}`, [order]);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeOrderDialog());
    navigate(location);
  };

  return (
    <span>
      {order && (
        <Modal onClick={handleClick} heading={<h2 className="text text_type_digits-default">{orderNumber}</h2>}>
          <ExtendedOrderDetails order={order} isModal={true} />
        </Modal>
      )}
    </span>
  );
};

export default ExtendedOrderDialog;
