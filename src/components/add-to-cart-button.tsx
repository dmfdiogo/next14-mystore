'use client'
import React from 'react'
import { useCart } from '@/contexts/cart-context'
import text from '@/constants/en'

export interface AddToCartButtonProps {
  productId: number
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 py-2.5 font-semibold"
    >
      {text.addToCart}
    </button>
  )
}

export default AddToCartButton
