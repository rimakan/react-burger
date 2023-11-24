import React from 'react';
import s from './IngredientsPreviewImg.module.scss';
import cn from 'classnames';

interface IngredientPreviewImgProps {
  src: string;
  alt: string;
  isLastItem: boolean;
}

const IngredientPreviewImg: React.FC<IngredientPreviewImgProps> = ({ alt, src, isLastItem }) => {
  const classNames = cn(s.ingredientPreviewImg, {
    [s.ingredientPreviewImg_last]: isLastItem,
  });

  return <img className={classNames} src={src} alt={alt} />;
};

export default IngredientPreviewImg;
