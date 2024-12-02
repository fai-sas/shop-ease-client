import { Image } from '@nextui-org/image'
import React from 'react'
import { Chip } from '@nextui-org/chip'

const SingleProduct = ({ product }: any) => {
  console.log(product)

  return (
    <>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Image
          shadow='sm'
          radius='lg'
          width='100%'
          alt={product.name}
          className='object-cover w-full '
          src={product?.images[0]}
        />
        <article className='space-y-4 '>
          <Chip color='primary'>{product?.vendor?.name}</Chip>
          <Chip color='secondary'>{product?.category?.name}</Chip>
          <h1 className='text-xl font-bold '>{product?.name}</h1>
          <h1 className=' text-md'>$ {product?.price}</h1>
        </article>
      </section>
    </>
  )
}

export default SingleProduct
