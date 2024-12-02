/* eslint-disable no-console */

'use server'

import { FieldValues } from 'react-hook-form'

import axios from 'axios'
import axiosInstance from '../lib/AxiosInstance'

export const createCart = async (cartData: FieldValues): Promise<any> => {
  try {
    const res = await axiosInstance.post('/carts', cartData)

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

export const getAllCarts = async () => {
  try {
    const res = await axiosInstance.get('/carts')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getSingleCart = async (cartId: string) => {
  try {
    const res = await axiosInstance.get(`/carts/${cartId}`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getMyCarts = async () => {
  try {
    const res = await axiosInstance.get(`/carts/my-carts`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)

    throw new Error('Failed to fetch data')
  }
}

export const updateCart = async (
  cartId: string,
  cartData: any
): Promise<any> => {
  try {
    const res = await axiosInstance.put(`/carts/${cartId}`, cartData)

    return res.data
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Error while updating cart'
    )
  }
}

export const deleteCart = async (cartId: string): Promise<any> => {
  try {
    const res = await axiosInstance.delete(`/carts/${cartId}`)

    return res.data
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Error while deleting product'
    )
  }
}
