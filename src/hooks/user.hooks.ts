import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'
import {
  getAllUsers,
  getAllVendors,
  getCustomerProfile,
  getMyProfile,
  getSingleUser,
  getSingleVendor,
} from '../services/user.service'

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['ALL_USERS'],
    queryFn: async () => await getAllUsers(),
  })
}

export const useGetSingleProduct = (userId: string) => {
  return useQuery({
    queryKey: ['SINGLE_USER', userId],
    queryFn: async () => await getSingleUser(userId),
  })
}

export const useGetAllVendors = () => {
  return useQuery({
    queryKey: ['ALL_VENDORS'],
    queryFn: async () => await getAllVendors(),
  })
}

export const useGetSingleVendor = (vendorId: string) => {
  return useQuery({
    queryKey: ['SINGLE_VENDOR', vendorId],
    queryFn: async () => await getSingleVendor(vendorId),
  })
}

export const useGetMyProfile = () => {
  return useQuery({
    queryKey: ['MY_PROFILE'],
    queryFn: async () => await getMyProfile(),
  })
}

export const useGetCustomerProfile = () => {
  return useQuery({
    queryKey: ['CUSTOMER_PROFILE'],
    queryFn: async () => await getCustomerProfile(),
  })
}
