export const initialState = {
  basket: [],
  user: null,
  products: [
    {
      id: "1",
      title: "Wireless Noise-Cancelling Headphones",
      price: 99.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UL640_FMwebp_QL65_.jpg",
      discount: 12
    },
    {
      id: "2",
      title: "Smart Fitness Watch with GPS",
      price: 99.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
      discount: 33
    },
    {
      id: "3",
      title: "4K Ultra HD Smart TV 55-inch",
      price: 499.99,
      rating: 4,
      image: "/image/4KTv.jpg",
      discount: 15
    },
    {
      id: "4",
      title: "Wireless Bluetooth Speaker",
      price: 79.99,
      rating: 4,
      image: "/image/WirelessBluetoothSpeaker.jpg",
      discount: 10
    },
    {
      id: "5",
      title: "Gaming Laptop 16GB RAM",
      price: 1299.99,
      rating: 5,
      image: "/image/GamingLaptop.jpg",
      discount: 8
    },
    {
      id: "6",
      title: "Smartphone 128GB Storage",
      price: 699.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.jpg",
      discount: 5
    },
    {
      id: "7",
      title: "Coffee Maker with Grinder",
      price: 89.99,
      rating: 4,
      image: "/image/Coffiemaker.jpg",
      discount: 20
    },
    {
      id: "8",
      title: "Robot Vacuum Cleaner",
      price: 249.99,
      rating: 4,
      image: "/image/RobotVacuumCleaner.jpg",
      discount: 12
    },
    {
      id: "9",
      title: "Air Fryer 5.8QT Digital",
      price: 119.99,
      rating: 5,
      image: "/image/AirFryer5.8QTDigital.jpg",
      discount: 25
    },
    {
      id: "10",
      title: "Wireless Charging Stand",
      price: 39.99,
      rating: 4,
      image: "/image/WirelessChargingStand.jpg",
      discount: 0
    },
    {
      
        id: "11",
        title: "Iron",
        price: 19.99,
        rating: 5,
        image: "/image/DryIron.jpg",
        discount: 10
      
    },

    {
      
        id: "12",
        title: "Maxima",
        price: 39.99,
        rating: 5,
        image: "/image/Maxima.jpg",
        discount: 20
      
    },

    {
      
      id: "13",
      title: "Titan Heritage 1.43",
      price: 59,
      rating: 5,
      image: "/image/Heritage.jpg",
      discount: 9
    
  },

  {
      
    id: "14",
    title: "Likedpage Women's Ball Gown Bridal Wedding Dresses",
    price: 399,
    rating: 5,
    image: "/Image/GownBridal.jpg",
    discount: 20
  
},

{
      
  id: "15",
  title: "Womens Lehenga Choli For Ceremonial",
  price: 159,
  rating: 5,
image:"/image/Lehenga.jpg"
}
    
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.id)
      }
    default:
      return state
  }
}

export default reducer