import React from 'react';
import s from './StellarBurgerMainPage.module.scss';
import BurgerIngredients from '../../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../BurgerConstructor/BurgerConstructor';
import BurgerIngredientsDetailsModal from '../StellarBurgerMainPage/BurgerIngredientsDetailsModal/BurgerIngredientsDetailsModal';
import { useRequestStellarBurgerMainPage } from './useRequestStellarBurgerMainPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const StellarBurgerMainPage: React.FC = () => {
  useRequestStellarBurgerMainPage();
  return (
    <main className={s.stellarBurgerMainPage}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>

      <BurgerIngredientsDetailsModal />
    </main>
  );
};

export default StellarBurgerMainPage;
