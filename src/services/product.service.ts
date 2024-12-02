/* eslint-disable no-console */

'use server'

import { FieldValues } from 'react-hook-form'

import axiosInstance from '../lib/AxiosInstance'

export const createProduct = async (postData: FieldValues): Promise<any> => {
  try {
    const res = await axiosInstance.post('/products', postData)

    return res.data
  } catch (error: any) {
    throw new Error(error)
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
