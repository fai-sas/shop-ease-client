/* eslint-disable no-console */

'use server'

import { FieldValues } from 'react-hook-form'

import axiosInstance from '../lib/AxiosInstance'

export const createCategory = async (postData: FieldValues): Promise<any> => {
  try {
    const res = await axiosInstance.post('/categories', postData)

    return res.data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getAllCategories = async () => {
  try {
    const res = await axiosInstance.get('/categories')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getSingleCategory = async (categoryId: string) => {
  try {
    const res = await axiosInstance.get(`/categories/${categoryId}`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const updateCategory = async (
  categoryId: string,
  categoryData: any
): Promise<any> => {
  try {
    const res = await axiosInstance.put(
      `/categories/${categoryId}`,
      categoryData
    )

    return res.data
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Error while updating product'
    )
  }
}

export const deleteCategory = async (categoryId: string): Promise<any> => {
  try {
    const res = await axiosInstance.delete(`/categories/${categoryId}`)

    return res.data
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Error while deleting product'
    )
  }
}

export const searchCategories = async (search: string) => {
  try {
    const res = await axiosInstance.get(`/categories?search=${search}`)

    return res.data
  } catch (error: any) {
    error.response?.data?.message || 'Failed to search category'
  }
}
