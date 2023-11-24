import React from 'react';
import Ingredients from './Ingredients/Ingredients';
import PageSection from '../../Common/PageSection/PageSection';

const BurgerIngredientsLayout: React.FC = () => {
  return (
    <PageSection header="Соберите бургер">
      <Ingredients />
    </PageSection>
  );
};

export default BurgerIngredientsLayout;
