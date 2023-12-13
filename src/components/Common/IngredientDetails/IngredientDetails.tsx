import React from 'react';
import s from './IngredientDetails.module.scss';
import { Product } from '../../../models/product';
import NutrientItem from './NutrientItem/NutrientItem';
import cn from 'classnames';

interface IngredientDetailsProps {
  product: Product;
  extraClassName?: string;
}

const IngredientDetails: React.FC<IngredientDetailsProps> = ({ product, extraClassName }) => {
  const ingredientClassNames = cn(s.ingredientDetails, extraClassName);
  const className = 'text text_type_main-default text_color_inactive';
  return (
    <div className={ingredientClassNames}>
      <img src={product.image_large} alt={product.name} />
      <h2 className="text text_type_main-medium" data-testid="productName">
        {product.name}
      </h2>
      <div className={s.ingredientDetails__description}>
        <NutrientItem nutrientTitle="Калории, ккал" nutrientQty={product.calories} className={className} />
        <NutrientItem nutrientTitle="Белки, г" nutrientQty={product.proteins} className={className} />
        <NutrientItem nutrientTitle="Жиры, г" nutrientQty={product.fat} className={className} />
        <NutrientItem nutrientTitle="Углеводы, г" nutrientQty={product.carbohydrates} className={className} />
      </div>
    </div>
  );
};

export default IngredientDetails;
