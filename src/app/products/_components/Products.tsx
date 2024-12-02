// 'use client'

import axiosInstance from '@/src/lib/AxiosInstance'

import { useGetAllProducts } from '@/src/hooks/product.hook'
import ProductsCard from './ProductsCard'
import ProductSidebar from './ProductSidebar'
import Search from './Search'

// const Products = () => {
//   const { data, isLoading, isError } = useGetAllProducts()
//   const products = data?.data || []

//   return (
//     <>
//       <section className='grid grid-cols-1 gap-4 py-12 md:grid-cols-5 '>
//         <div>
//           <ProductSidebar />
//         </div>
//         <article className='col-span-4 '>
//           <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
//             {products.map((product: any) => {
//               return <ProductsCard key={product?.productId} product={product} />
//             })}
//           </div>
//         </article>
//       </section>
//     </>
//   )
// }

// export default Products

const Products = async ({ searchParams }: { searchParams: any }) => {
  const params = new URLSearchParams(searchParams)

  // Fetch all posts based on search and category filters
  const { data } = await axiosInstance.get(`/products`, {
    params: {
      searchTerm: params.get('searchTerm'),
      category: params.get('category'),
    },
  })

  return (
    <>
      <section className='grid grid-cols-1 gap-4 py-12 md:grid-cols-5 '>
        <div>
          <Search />
          <ProductSidebar />
        </div>
        <article className='col-span-4 '>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {data?.data?.map((product: any) => {
              return <ProductsCard key={product?.productId} product={product} />
            })}
          </div>
        </article>
      </section>
    </>
  )
}

export default Products
