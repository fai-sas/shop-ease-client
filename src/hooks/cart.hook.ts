import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  createCart,
  deleteCart,
  getAllCarts,
  getMyCarts,
  getSingleCart,
  updateCart,
} from '../services/cart.service'

export const useCreateCart = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CREATE_CART'],
    mutationFn: async (cartData) => await createCart(cartData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['ALL_CARTS', 'CUSTOMER_PROFILE'],
      })
      toast.success('Product Added to Cart Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}

export const useGetAllCart = () => {
  return useQuery({
    queryKey: ['ALL_CARTS'],
    queryFn: async () => await getAllCarts(),
  })
}

export const useGetSingleCart = (cartId: string) => {
  return useQuery({
    queryKey: ['SINGLE_CART', cartId],
    queryFn: async () => await getSingleCart(cartId),
  })
}

export const useGetMyCart = () => {
  return useQuery({
    queryKey: ['MY_CART'],
    queryFn: async () => await getMyCarts(),
  })
}

export const useUpdateCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['UPDATE_CART'],
    mutationFn: async ({
      cartId,
      cartData,
    }: {
      cartId: string
      cartData: any
    }) => {
      return await updateCart(cartId, cartData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_CARTS'] })
      toast.success('Cart Updated Successfully')
    },
    onError: (error: any) => {
      toast.error(error?.message)
    },
  })
}

export const useDeleteCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['DELETE_CART'],
    mutationFn: async (cartId: string) => await deleteCart(cartId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ALL_CARTS'] })
      toast.success('Cart Deleted Successfully')
    },
    onError: (error) => {
      toast.error(error?.message)
    },
  })
}
