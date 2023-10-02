import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef } from 'react';
import s from './BurgerConstructorItem.module.scss';
import { Product } from '../../../models/product';
import { XYCoord, useDrag, useDrop } from 'react-dnd';
import { setReplacedIngredient, sortIngredients } from '../../../store/reactBurger/constructorSlice/constructorSlice';
import { useDispatch, useSelector } from '../../../hooks';

interface BurgerConstructorItemProps {
  product: Product;
  onClick: () => void;
}

const BurgerConstructorItem: React.FC<BurgerConstructorItemProps> = ({ product, onClick }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const burgerIngredientsList = useSelector(
    ({ reactBurger }) => reactBurger.burgerConstructor.burgerConstructorIngredients,
  );

  const [, drag] = useDrag({
    type: 'constructor_ingredient',
    item: product as Product,
    end(item) {
      return item;
    },
  });

  const [, drop] = useDrop({
    accept: ['constructor_ingredient', 'ingredient'],
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      handlerId: monitor.getHandlerId(),
    }),
    hover(ingredient, monitor) {
      const dragItem = ingredient as Product;
      const itemType = monitor.getItemType();
      if (itemType === 'ingredient') {
        return;
      }
      if (itemType === 'constructor_ingredient') {
        const hoverIndex = burgerIngredientsList.findIndex((element: Product) => element.dragId === product.dragId);
        const dragIndex = burgerIngredientsList.findIndex((element: Product) => element.dragId === dragItem.dragId);

        if (hoverIndex === hoverIndex) {
          dispatch(setReplacedIngredient(null));
        }

        const hoverBoundingRect = ref.current?.getBoundingClientRect() as DOMRect;
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        dispatch(sortIngredients({ from: dragItem, to: product }));
      }
    },
  });

  const [, dropDragIcon] = useDrop({
    accept: 'ingredient',
    hover: (ingredient) => {
      const dragItem = product as Product;
      if (dragItem.type !== 'bun') {
        dispatch(setReplacedIngredient(ingredient));
      }
    },
  });

  drag(drop(ref));

  return (
    <div className={s.burgerConstructorItem} ref={ref}>
      <span ref={dropDragIcon}>
        <DragIcon type="primary" />
      </span>
      <ConstructorElement
        text={product.name}
        thumbnail={product.image_mobile}
        price={product.price}
        handleClose={onClick}
      />
    </div>
  );
};

export default BurgerConstructorItem;
