'use client'

import { useUser } from '@/src/context/user.provider'
import { useCreateCart } from '@/src/hooks/cart.hook'
import { useGetCustomerProfile } from '@/src/hooks/user.hooks'
import { Button } from '@nextui-org/button'

import { ShoppingCart, XCircle } from 'lucide-react'

const AddToCart = ({ productId }: { productId: string }) => {
  const { user } = useUser()

  const { mutate: handleAddToCart, isLoading: addToCartPending } =
    useCreateCart()

  const { data, isLoading, isError } = useGetCustomerProfile()

  const cartItem = data?.data?.cartItems?.find(
    (item) => item?.productId === productId
  )

  const quantity = cartItem?.quantity || 0

  const handleAddToCartClick = () => {
    if (!user?.email) {
      console.error('User is not logged in')
      return
    }

    const cartData = {
      productId,
      customerId: user.email,
    }

    handleAddToCart(cartData)
  }

  return (
    <div className='flex items-center gap-4'>
      <Button
        onClick={handleAddToCartClick}
        isLoading={addToCartPending}
        className='flex items-center gap-2'
        color='primary'
        variant='flat'
      >
        <ShoppingCart className='w-4 h-4' />
        Add to Cart
      </Button>

      <span className='text-lg font-semibold'>{quantity}</span>

      <Button className='flex items-center gap-2' color='danger' variant='flat'>
        <XCircle className='w-4 h-4' />
        Remove from Cart
      </Button>
    </div>
  )
}

export default AddToCart
