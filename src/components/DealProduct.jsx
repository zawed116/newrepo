import React from 'react';
import { useStateValue } from '../StateContext';

function DealProduct({ id, title, image, price, originalPrice, discount, timeLeft }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: { id, title, image, price }
    });
  };

  return (
    <div className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-32 object-contain mx-auto" />
        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1">
          {discount}% off
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-end">
          <span className="text-lg font-bold text-red-600">${price}</span>
          <span className="text-xs text-gray-500 line-through ml-1">${originalPrice}</span>
        </div>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{title}</p>
        <div className="text-xs text-blue-500 mt-1">Deal ends in {timeLeft}</div>
        <button 
          onClick={addToBasket}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-xs py-1 mt-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DealProduct;