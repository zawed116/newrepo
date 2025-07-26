import React from 'react';
import { Star as StarIcon } from '@mui/icons-material';
import { useStateValue } from '../StateContext';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img className="h-24 w-24 object-contain" src={image} alt={title} />
      <div className="ml-4">
        <p className="text-lg font-medium">{title}</p>
        <div className="flex">
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
        </div>
        <p className="text-lg font-bold mt-2">${price}</p>
        <button
          onClick={removeFromBasket}
          className="mt-2 text-sm text-blue-500 hover:text-blue-700"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;