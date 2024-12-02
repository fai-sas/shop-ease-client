'use client'

import { useGetAllCategories } from '@/src/hooks/category.hook'
import Search from './Search'
import FormSelect from '@/src/components/form/FormSelect'
import { Select, SelectSection, SelectItem } from '@nextui-org/select'

const ProductSidebar = () => {
  const { data, isLoading, isError } = useGetAllCategories()
  const categories = data?.data || []

  console.log(data)

  const categoryOptions = categories.map((category: any) => {
    return {
      key: category.categoryId,
      label: category.name,
    }
  })

  console.log(categoryOptions)

  return (
    <>
      <article className='space-y-4 '>
        {/* <Search /> */}

        {/* Category Select */}
        <div className='flex flex-wrap gap-2 py-2'>
          <Select label='Filter by Category' className='max-w-xs'>
            {categoryOptions.map((category: any) => (
              <SelectItem key={category?.categoryId}>
                {category?.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <h1 className='gap-8 text-2xl font-bold '>Price Range</h1>
      </article>
    </>
  )
}

export default ProductSidebar
