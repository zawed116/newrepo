import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../StateContext'
import Product from '../components/Product'

function ProductPage() {
  const { id } = useParams()
  const [{ products }] = useStateValue()
  const product = products.find(p => p.id === id)

  if (!product) return <div>Product not found</div>

  return (
    <div className="p-4">
      <Product {...product} />
    </div>
  )
}

export default ProductPage