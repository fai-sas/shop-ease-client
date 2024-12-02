// 'use client'

// import { Input } from '@nextui-org/input'
// import { useForm } from 'react-hook-form'
// import { useEffect } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { SearchIcon } from 'lucide-react'

// import useDebounce from '@/src/hooks/debounce.hook'

// const Search = () => {
//   const { register, watch, reset } = useForm()
//   const searchParams = useSearchParams()
//   const router = useRouter()

//   const searchTerm = useDebounce(watch('searchTerm'))

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString())

//     if (searchTerm) {
//       params.set('searchTerm', searchTerm)
//     } else {
//       params.delete('searchTerm')
//     }
//     router.push(`/products?${params.toString()}`)
//   }, [searchTerm, router, searchParams])

//   const resetSearchAndFilter = () => {
//     reset({ searchTerm: '' })
//     router.push('/products')
//   }

//   return (
//     <>
//       <div className='flex-1 max-w-xl pt-10 mx-auto'>
//         <Input
//           {...register('searchTerm')}
//           aria-label='Search'
//           classNames={{
//             inputWrapper: 'bg-default-100',
//             input: 'text-sm',
//           }}
//           placeholder='Search...'
//           size='lg'
//           startContent={
//             <SearchIcon className='flex-shrink-0 text-base pointer-events-none text-default-400' />
//           }
//           type='text'
//         />
//       </div>
//     </>
//   )
// }

// export default Search

'use client'

import { Input } from '@nextui-org/input'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon } from 'lucide-react'

import useDebounce from '@/src/hooks/debounce.hook'

const Search = () => {
  const { register, watch, reset } = useForm<{ searchTerm: string }>()
  const router = useRouter()
  const searchParams = useSearchParams()

  const searchTerm = useDebounce(watch('searchTerm', ''), 300) // Default value & debounce delay

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString() || '')

    if (searchTerm.trim()) {
      params.set('searchTerm', searchTerm.trim())
    } else {
      params.delete('searchTerm')
    }

    // Prevent unnecessary routing if the params haven't changed
    const newUrl = `/products?${params.toString()}`
    if (newUrl !== window.location.href) {
      router.push(newUrl)
    }
  }, [searchTerm, router, searchParams])

  const resetSearchAndFilter = () => {
    reset({ searchTerm: '' })
    router.push('/products') // Reset search and navigate to the base route
  }

  return (
    <div className='flex-1 max-w-xl pt-10 mx-auto'>
      <Input
        {...register('searchTerm')}
        aria-label='Search'
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm',
        }}
        placeholder='Search...'
        size='lg'
        startContent={
          <SearchIcon className='flex-shrink-0 text-base pointer-events-none text-default-400' />
        }
        type='text'
      />
      <button
        type='button'
        onClick={resetSearchAndFilter}
        className='mt-2 text-sm text-red-500 hover:underline'
      >
        Reset Search
      </button>
    </div>
  )
}

export default Search
