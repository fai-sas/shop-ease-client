import Link from 'next/link'

const CategoriesCard = ({ category }) => {
  const getCategoryImage = (categoryName) => {
    switch (categoryName?.toLowerCase()) {
      case 'camping equipment':
        return 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      case 'fitness gear':
        return 'https://images.unsplash.com/photo-1557330359-ffb0deed6163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      case 'footwear':
        return 'https://images.unsplash.com/photo-1546367564-ade1880f8921?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      default:
        return 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  }

  const imageUrl = getCategoryImage(category)

  return (
    <div>
      <Link href={`/products/?${category}`} className='block mx-auto mb-4'>
        <div className='max-w-sm overflow-hidden rounded shadow-lg'>
          <img
            className='w-full h-auto rounded-lg'
            src={imageUrl}
            alt={category}
          />
          <div className='px-6 py-4'>
            <div className='mb-2 text-xl font-bold'>{category}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoriesCard
