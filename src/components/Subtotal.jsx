import React from 'react';
import { useStateValue } from '../StateContext';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-gray-100 p-5 border border-gray-300 rounded">
      <p className="text-lg font-medium">
        Subtotal ({basket.length} items): <span className="font-bold">${totalPrice.toFixed(2)}</span>
      </p>
      <div className="flex items-center mt-2">
        <input type="checkbox" className="mr-2" />
        <span className="text-sm">This order contains a gift</span>
      </div>
      <button
        onClick={() => navigate('/payment')}
        className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 py-2 rounded text-sm font-medium"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;