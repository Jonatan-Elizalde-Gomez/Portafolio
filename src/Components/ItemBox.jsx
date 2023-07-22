import React from 'react';

const ItemBox = ({ texto }) => {
  return (
    <div className="bg-letters rounded-lg p-3 text-md font-semibold text-backgroundColor">
      {texto}
    </div>
  );
};

export default ItemBox;
