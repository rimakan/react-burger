import React from 'react';

interface NutrientItemProps {
  nutrientTitle: string;
  nutrientQty: number;
  className: string;
}

const NutrientItem: React.FC<NutrientItemProps> = ({ nutrientTitle, nutrientQty, className }) => {
  return (
    <div>
      <p className={className}>{nutrientTitle}</p>
      <p className={className}>{nutrientQty}</p>
    </div>
  );
};

export default NutrientItem;
