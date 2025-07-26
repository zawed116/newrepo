import React from 'react'

const Carousel = () => {
  const images = [
    'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
  ]

  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Amazon Banner ${index + 1}`}
            className={`w-full h-full object-cover ${index === 0 ? 'block' : 'hidden'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel