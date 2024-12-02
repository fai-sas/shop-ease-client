import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getSingleCategory,
  searchCategories,
  updateCategory,
} from '../services/category.service'
import { deleteCache } from 'next/dist/server/lib/render-server'

export const useCreateCategory = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CREATE_CATEGORY'],
    mutationFn: async (categoryData) => await createCategory(categoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_CATEGORIES'] })
      toast.success('Category Created Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ['ALL_CATEGORIES'],
    queryFn: async () => await getAllCategories(),
  })
}

export const useGetSingleCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ['SINGLE_CATEGORY', categoryId],
    queryFn: async () => await getSingleCategory(categoryId),
  })
}

export const useUpdateCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['UPDATE_CATEGORY'],
    mutationFn: async ({
      categoryId,
      categoryData,
    }: {
      categoryId: string
      categoryData: any
    }) => {
      return await updateCategory(categoryId, categoryData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_CATEGORIES'] })
      toast.success('Category Updated Successfully')
    },
    onError: (error: any) => {
      toast.error(error?.message)
    },
  })
}

export const useDeleteCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['DELETE_CATEGORY'],
    mutationFn: async (categoryId: string) => await deleteCategory(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_CATEGORIES'] })
      toast.success('Category Deleted Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useSearchCategories = () => {
  return useMutation({
    mutationKey: ['SEARCH_CATEGORIES'],
    mutationFn: async (search: string) => await searchCategories(search),
  })
}
