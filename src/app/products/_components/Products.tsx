'use client'

import { useGetAllProducts } from '@/src/hooks/product.hook'
import ProductsCard from './ProductsCard'

const Products = () => {
  const { data, isLoading, isError } = useGetAllProducts()
  const products = data?.data || []

  return (
    <>
      <div>All Products</div>
      <article className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {products.map((product: any) => {
          return <ProductsCard key={product?.productId} product={product} />
        })}
      </article>
    </>
  )
}

export default Products
