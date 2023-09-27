import React, { createContext, useEffect, useMemo, useState } from 'react';
import s from './StellarBurgerMainPage.module.scss';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { BASE_URL } from '../../constants/constants';
import { Product } from '../../models/product';
import BurgerIngredientsDetailsModal from './BurgerIngredientsDetailsModal/BurgerIngredientsDetailsModal';
import { useModal } from '../../hooks/useModal';

export const IngredientsContext = createContext<[Product[], string, any, any]>([[], '', null, null]);

const StellarBurgerMainPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<Product[]>([]);
  const [ingredientId, setIngredientId] = useState('');
  const { isModalOpen, toggleModal } = useModal();

  useEffect(() => {
    const getIngredients = async () => {
      fetch(BASE_URL)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((data) => setIngredients(data.data));
    };

    try {
      getIngredients();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main className={s.stelarBurgerMainPage}>
      <IngredientsContext.Provider value={[ingredients, ingredientId, setIngredientId, toggleModal]}>
        <BurgerIngredients />
        <BurgerConstructor />
        {isModalOpen && <BurgerIngredientsDetailsModal />}
      </IngredientsContext.Provider>
    </main>
  );
};

export default StellarBurgerMainPage;
