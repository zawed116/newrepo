import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateContext';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
        <div className="md:w-3/4">
          <div className="bg-white p-4 rounded shadow">
            <h1 className="text-2xl font-bold border-b pb-2 mb-4">
              Your Shopping Basket
            </h1>
            
            {basket.length === 0 ? (
              <p>Your basket is empty</p>
            ) : (
              basket.map(item => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              ))
            )}
          </div>
        </div>
        
        <div className="md:w-1/4">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;