/* eslint-disable no-console */

'use server'

import { FieldValues } from 'react-hook-form'
import axiosInstance from '../lib/AxiosInstance'

export const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get('/users')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getSingleUser = async (userId: string) => {
  try {
    const res = await axiosInstance.get(`/users/${userId}`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getAllVendors = async () => {
  try {
    const res = await axiosInstance.get('/users/vendors')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getSingleVendor = async (vendorId: string) => {
  try {
    const res = await axiosInstance.get(`/users/vendors/${vendorId}`)

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getMyProfile = async () => {
  try {
    const res = await axiosInstance.get('/users/my-profile')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}

export const getCustomerProfile = async () => {
  try {
    const res = await axiosInstance.get('/users/customer-profile')

    return res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data')
  }
}
