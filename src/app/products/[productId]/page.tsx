'use client'

import SingleProduct from '../_components/SingleProduct'

import { useGetSingleProduct } from '@/src/hooks/product.hook'

interface TProps {
  params: {
    productId: string
  }
}

const SingleProductPage = ({ params: { productId } }: TProps) => {
  const { data } = useGetSingleProduct(productId)

  const product = data?.data

  return (
    <div className='mx-auto my-3 max-w-[720px]'>
      {product ? <SingleProduct product={product} /> : <p>Loading...</p>}
    </div>
  )
}

export default SingleProductPage
