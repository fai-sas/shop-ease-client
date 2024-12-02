'use client'

import { useGetSingleVendor } from '@/src/hooks/user.hooks'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

interface TProps {
  params: {
    vendorId: string
  }
}

const ShopDetailsPage = ({ params: { vendorId } }: TProps) => {
  const { data } = useGetSingleVendor(vendorId)

  const vendor = data?.data

  return (
    <>
      <div>
        <h1 className='text-2xl '>{vendor?.name}</h1>
      </div>

      <section className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {vendor?.products?.map((product) => {
          if (vendor?.products.length === 0) {
            return <h1 key={product?.productId}>No Product Found</h1>
          }

          {
            return (
              <Card shadow='sm' key={vendor?.productId}>
                <CardBody className='p-0 overflow-visible'>
                  <Link href={`/products/${product?.productId}`}>
                    <Image
                      shadow='sm'
                      radius='lg'
                      width='100%'
                      alt={vendor.name}
                      className='object-cover w-full '
                      src={product?.images[0]}
                    />
                  </Link>
                </CardBody>
                <CardFooter className='justify-between text-small'>
                  <b>{product?.name}</b>
                  <p className='text-md text-default-500'>$ {product?.price}</p>
                </CardFooter>
              </Card>
            )
          }
        })}
      </section>
    </>
  )
}

export default ShopDetailsPage
