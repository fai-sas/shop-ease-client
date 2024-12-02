import { useMutation } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  loginUser,
  registerCustomer,
  registerVendor,
} from '../services/auth.service'

export const useCustomerRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['CUSTOMER_REGISTRATION'],
    mutationFn: async (userData) => await registerCustomer(userData),
    onSuccess: () => {
      toast.success('Customer Registration Successful')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}

export const useVendorRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['VENDOR_REGISTRATION'],
    mutationFn: async (userData) => await registerVendor(userData),
    onSuccess: () => {
      toast.success('Vendor Registration Successful')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['USER_LOGIN'],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success('User Login Successful')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
