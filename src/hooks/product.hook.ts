import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getMyProducts,
  getSingleProduct,
  searchProducts,
  updateProduct,
} from '../services/product.service'

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CREATE_PRODUCT'],
    mutationFn: async (productData) => await createProduct(productData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_PRODUCTS'] })
      toast.success('Product Created Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['ALL_PRODUCTS'],
    queryFn: async () => await getAllProducts(),
  })
}

export const useGetSingleProduct = (productId: string) => {
  return useQuery({
    queryKey: ['SINGLE_PRODUCT', productId],
    queryFn: async () => await getSingleProduct(productId),
  })
}

export const useGetMyProducts = () => {
  return useQuery({
    queryKey: ['MY_PRODUCT'],
    queryFn: async () => await getMyProducts(),
  })
}

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['UPDATE_PRODUCT'],
    mutationFn: async ({
      productId,
      productData,
    }: {
      productId: string
      productData: any
    }) => {
      return await updateProduct(productId, productData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_PRODUCTS'] })
      toast.success('Product Updated Successfully')
    },
    onError: (error: any) => {
      toast.error(error?.message)
    },
  })
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['DELETE_PRODUCT'],
    mutationFn: async (productId: string) => await deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_PRODUCTS'] })
      toast.success('Product Deleted Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useSearchProducts = () => {
  return useMutation({
    mutationKey: ['SEARCH_PRODUCTS'],
    mutationFn: async (search: string) => await searchProducts(search),
  })
}
