'use client'

import { useGetCustomerProfile } from '@/src/hooks/user.hooks'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'

const CartPage = () => {
  const { data, isLoading, isError } = useGetCustomerProfile()

  const cartItems = data?.data?.cartItems || []
  const grandTotalPrice = data?.data?.grandTotalPrice || 0

  if (isLoading) return <p>Loading cart...</p>
  if (isError) return <p>Failed to load cart. Please try again later.</p>

  return (
    <div className='container py-8 mx-auto'>
      <h1 className='mb-6 text-2xl font-semibold'>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className='text-lg text-gray-500'>Your cart is empty.</p>
      ) : (
        <div className='grid gap-6'>
          {/* Table-like Header */}
          <div className='grid grid-cols-4 pb-2 text-sm font-bold text-left border-b'>
            <span>Product</span>
            <span>Quantity</span>
            <span>Unit Price</span>
            <span>Total Price</span>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.cartItemId}
              className='grid items-center grid-cols-4 gap-4 p-4 border-b'
            >
              {/* Product Column */}
              <div className='flex items-center gap-4'>
                <Image
                  shadow='sm'
                  radius='lg'
                  width={60}
                  height={60}
                  alt={item?.product?.name}
                  src={item?.product?.images?.[0] || '/placeholder-image.png'}
                  className='object-cover'
                />
                <span className='text-sm font-medium'>
                  {item?.product?.name}
                </span>
              </div>

              {/* Quantity Column */}
              <span className='text-sm text-gray-600'>{item?.quantity}</span>

              {/* Unit Price Column */}
              <span className='text-sm text-gray-600'>
                ${item?.product?.price.toFixed(2)}
              </span>

              {/* Total Price Column */}
              <span className='text-sm text-gray-600'>
                ${item?.totalPrice.toFixed(2)}
              </span>
            </div>
          ))}

          {/* Grand Total Row */}
          <div className='grid items-center grid-cols-4 gap-4 p-4 text-lg font-bold border-t'>
            <span></span>
            <span></span>
            <span className='text-right'>Grand Total:</span>
            <span>${grandTotalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <div className='flex justify-end'>
            <Button
              className='flex items-center gap-2'
              color='primary'
              variant='flat'
            >
              Check Out
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
