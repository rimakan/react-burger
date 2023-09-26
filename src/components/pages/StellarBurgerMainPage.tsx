import React, { createContext, useEffect, useMemo, useState } from 'react';
import s from './StellarBurgerMainPage.module.scss';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { BASE_URL } from '../../constants/constants';
import { Product } from '../../models/product';
import BurgerIngredientsDetailsModal from './BurgerIngredientsDetailsModal/BurgerIngredientsDetailsModal';

export const IngredientsContext = createContext<[Product[], string, any, any]>([[], '', null, null]);

const StellarBurgerMainPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<Product[]>([]);
  const [ingredientId, setIngredientId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetch(BASE_URL);
      const ingredients = await response.json();
      setIngredients(ingredients.data);
    };

    try {
      getIngredients();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main>
      <div className={s.stelarBurgerMainPage}>
        <IngredientsContext.Provider value={[ingredients, ingredientId, setIngredientId, handleClickOpenModal]}>
          <BurgerIngredients />
          <BurgerConstructor />
          {isModalOpen && <BurgerIngredientsDetailsModal />}
        </IngredientsContext.Provider>
      </div>
    </main>
  );
};

export default StellarBurgerMainPage;
