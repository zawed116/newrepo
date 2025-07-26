import React from 'react'
import Carousel from '../components/Carousel'
import Product from '../components/Product'
import CategoryCard from '../components/CategoryCard'
import { useStateValue } from '../StateContext'

function Home() {
  const [{ products }] = useStateValue()

  return (
    <div className="bg-gray-100">
      <main className="max-w-screen-2xl mx-auto">
        {/* Hero Carousel with Images */}
        <Carousel images={[
          'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
          'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
          'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
        ]} />
        
        {/* Product Categories with Images */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <CategoryCard 
              title="Electronics"
              image="https://links.papareact.com/yo8"
            />
            <CategoryCard 
              title="Home & Kitchen"
              image="https://links.papareact.com/s03"
            />
            <CategoryCard 
              title="Fashion"
              image="https://links.papareact.com/gu1"
            />
            <CategoryCard 
              title="Beauty & Care"
              image="https://links.papareact.com/4y0"
            />
            <CategoryCard 
              title="Toys & Games"
              image="https://links.papareact.com/qp7"
            />
          </div>
        </div>

        {/* Product Grid with Images */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Today's Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {products.map(product => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image || 'https://via.placeholder.com/300'} // Fallback image
                discount={product.discount}
              />
            ))}
          </div>
        </div>

        {/* Additional Image Banner */}
        <div className="p-4">
          <img 
            src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg" 
            alt="Amazon banner"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </main>
    </div>
  )
}

export default Home