import React from 'react'
import { useStateValue } from '../StateContext'

const Product = ({ id, title, price, image, rating = 0, discount = 0 }) => {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: { id, title, price, image, rating, discount }
    })
  }

  return (
    <div className="relative flex flex-col m-2 p-5 bg-white z-30 rounded-md shadow-md hover:shadow-lg transition-shadow">
      {discount > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {discount}% OFF
        </span>
      )}
      
      <img 
        src={image} 
        alt={title}
        className="h-52 w-full object-contain mb-4"
      />
      
      <h4 className="my-2 line-clamp-2">{title}</h4>
      
      <div className="flex items-center">
        {Array(5).fill().map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-yellow-500'}`}
            viewBox="0 0 20 20"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-xs text-gray-500">{rating}</span>
      </div>
      
      <div className="flex items-end my-2">
        {discount > 0 && (
          <span className="text-sm text-gray-500 line-through mr-2">
            ${(price * (1 + discount/100)).toFixed(2)}
          </span>
        )}
        <p className="text-lg font-semibold">
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
      </div>
      
      <button 
        onClick={addToBasket}
        className="mt-auto bg-amazon_yellow-light border border-amazon_yellow-dark rounded-sm p-1 text-sm hover:bg-yellow-500 transition-colors"
      >
        Add to Basket
      </button>
    </div>
  )
}

export default Product