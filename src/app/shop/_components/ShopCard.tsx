import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

const ShopCard = ({ vendor }) => {
  return (
    <Link href={`/shop/${vendor?.vendorId}`}>
      <Card shadow='sm' key={vendor?.vendorId}>
        <CardBody className='p-0 overflow-visible'>
          {/* <Image
          shadow='sm'
          radius='lg'
          width='100%'
          alt={vendor.name}
          className='object-cover w-full '
          src={vendor?.images[0]}
        /> */}
        </CardBody>
        <CardFooter className='justify-between text-small'>
          <b>{vendor?.name}</b>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ShopCard
