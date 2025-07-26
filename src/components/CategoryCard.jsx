import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ title, image }) => {
  return (
    <Link to="/" className="group">
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="mt-2 text-center font-medium group-hover:text-amazon_blue">
          {title}
        </h3>
      </div>
    </Link>
  )
}

export default CategoryCard