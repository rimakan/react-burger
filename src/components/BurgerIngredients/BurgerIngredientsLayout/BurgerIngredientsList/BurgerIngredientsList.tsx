import React, { useContext } from 'react';
import s from './BurgerIngredientsList.module.scss';
import IngredientCard from '../../../Common/IngredientCard/IngredientCard';
import { IngredientsContext } from '../../../pages/StellarBurgerMainPage';

interface BurgerIngredientsListProps {
  type: string;
  header: string;
  id: string;
}

const BurgerIngredientsList: React.FC<BurgerIngredientsListProps> = ({ header, type, id }) => {
  const [productsList, , setIngredientId, toggleModal] = useContext(IngredientsContext);
  const handleClick = (id: string) => {
    setIngredientId(id);
    toggleModal();
  }
  return (
    <div className={s.burgerIngredientsList} id={id}>
      <header className="pb-6">
        <h2 className="text text_type_main-medium">{header}</h2>
      </header>
      <div className={s.list}>
        {productsList
          .filter((product) => product.type === type)
          .map(({ _id, __v, image, price, name }) => {
            return (
              <IngredientCard
                key={_id}
                count={__v}
                itemImage={image}
                itemTitle={name}
                itemPrice={price}
                onClick={() => handleClick(_id)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BurgerIngredientsList;
