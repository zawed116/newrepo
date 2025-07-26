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
              image="http://www.pngall.com/wp-content/uploads/1/Electronic-High-Quality-PNG.png"
            />
            <CategoryCard 
              title="Home & Kitchen"
              image="https://tse2.mm.bing.net/th/id/OIP.WZIkVhVq61sEzbEjfxA6hgHaE7?pid=Api&P=0&h=180"
            />
            <CategoryCard 
              title="Fashion"
              image="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg"
            />
            <CategoryCard 
              title="Beauty & Care"
              image="https://tse3.mm.bing.net/th/id/OIP.ZHIPM-cqX1-Z5VUsuH4f3QHaFF?pid=Api&P=0&h=180"
            />
            <CategoryCard 
              title="Toys & Games"
              image="https://tse3.mm.bing.net/th/id/OIP.y9NRfrrhLFaKWznd0Kf2vQHaEK?pid=Api&P=0&h=180"
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