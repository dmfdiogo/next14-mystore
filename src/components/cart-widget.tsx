'use client'
import text from '@/constants/en'
import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

const CartWidget = () => {
  const { items } = useCart()
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">
        {text.cart} {items.length}
      </span>
    </div>
  )
}

export default CartWidget
