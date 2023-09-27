import React from 'react';
import s from './IngredientDetails.module.scss';
import { Product } from '../../../models/product';

interface IngredientDetailsProps {
  product: Product;
}

const IngredientDetails: React.FC<IngredientDetailsProps> = ({ product }) => {
  const className = 'text text_type_main-default text_color_inactive';
  return (
    <div className={s.ingredientDetails}>
      <img src={product.image_large} alt={product.name} />
      <h2 className="text text_type_main-medium">{product.name}</h2>
      <div className={s.ingredientDetails__description}>
        <p className={className}>Калории, ккал</p>
        <p className={className}>Белки, г</p>
        <p className={className}>Жиры, г</p>
        <p className={className}>Углеводы, г</p>
        <p className={className}>{product.calories}</p>
        <p className={className}>{product.proteins}</p>
        <p className={className}>{product.fat}</p>
        <p className={className}>{product.carbohydrates}</p>
      </div>
    </div>
  );
};

export default IngredientDetails;
