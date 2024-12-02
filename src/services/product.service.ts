/* eslint-disable no-console */

'use server'

import { FieldValues } from 'react-hook-form'

import axiosInstance from '../lib/AxiosInstance'
import axios from 'axios'

// export const createProduct = async (productData: FieldValues): Promise<any> => {
//   try {
//     const res = await axiosInstance.post('/products', productData)

//     return res.data
//   } catch (error: any) {
//     throw new Error(error)
//   }
// }

export const createProduct = async (productData: FieldValues): Promise<any> => {
  try {
    const res = await axiosInstance.post('/products', productData)

    return res.data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message)
      throw new Error(
        error.response?.data?.message || 'An unexpected error occurred'
      )
    } else {
      console.error('Unexpected error:', error)
      throw new Error('An unexpected error occurred')
    }
  }
}

export const getAllProducts = async () => {
  try {
    const res = await axiosInstance.get('/products')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getSingleProduct = async (productId: string) => {
  try {
    const res = await axiosInstance.get(`/products/${productId}`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getMyProducts = async () => {
  try {
    const res = await axiosInstance.get(`/products/my-products`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)

    throw new Error('Failed to fetch data')
  }
}

export const updateProduct = async (
  productId: string,
  productData: any
): Promise<any> => {
  try {
    const res = await axiosInstance.put(`/products/${productId}`, productData)

    return res.data
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Error while updating product'
    )
  }
}

export const deleteProduct = async (productId: string): Promise<any> => {
  try {
    const res = await axiosInstance.delete(`/products/${productId}`)

    return res.data
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Error while deleting product'
    )
  }
}

export const searchProducts = async (search: string) => {
  try {
    const res = await axiosInstance.get(`/products?search=${search}`)

    return res.data
  } catch (error: any) {
    error.response?.data?.message || 'Failed to search items'
  }
}
