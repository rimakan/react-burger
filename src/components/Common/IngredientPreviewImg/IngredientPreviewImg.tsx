import React from 'react';
import s from './IngredientsPreviewImg.module.scss';

interface IngredientPreviewImgProps {
  src: string;
  alt: string;
}

const IngredientPreviewImg: React.FC<IngredientPreviewImgProps> = ({ alt, src }) => {
  return <img className={s.ingredientPreviewImg} src={src} alt={alt} />;
};

export default IngredientPreviewImg;
