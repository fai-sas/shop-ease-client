'use client'

import { useGetAllUsers, useGetAllVendors } from '@/src/hooks/user.hooks'
import ShopCard from './ShopCard'

const Shops = () => {
  // const { data, isLoading, isError } = useGetAllUsers()

  // const vendors = data?.data?.filter((vendor) => vendor.role === 'VENDOR')

  const { data, isLoading, isError } = useGetAllVendors()

  const vendors = data?.data

  console.log(data)

  return (
    <div className='flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl'>
      <h1 className='py-8 mb-4 text-2xl font-bold'>Vendors</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 '>
        {vendors?.map((vendor, index) => (
          <ShopCard key={index} vendor={vendor} />
        ))}
      </div>
    </div>
  )
}

export default Shops
