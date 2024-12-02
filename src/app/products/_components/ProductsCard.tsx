import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

const ProductsCard = ({ product }) => {
  return (
    <>
      <Card shadow='sm' key={product?.productId}>
        <CardBody className='p-0 overflow-visible'>
          <Link href={`/products/${product?.productId}`}>
            <Image
              shadow='sm'
              radius='lg'
              width='100%'
              alt={product.name}
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
    </>
  )
}

export default ProductsCard
