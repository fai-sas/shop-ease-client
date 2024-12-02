'use server'

import { FieldValues } from 'react-hook-form'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

import axiosInstance from '../lib/AxiosInstance'

export const registerCustomer = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/create-customer', userData)

    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const registerVendor = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/create-vendor', userData)

    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/login', userData)

    if (data.success) {
      cookies().set('accessToken', data?.data?.accessToken)
      cookies().set('refreshToken', data?.data?.refreshToken)
    }

    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const logout = async () => {
  cookies().delete('accessToken')
  cookies().delete('refreshToken')
}

export const getCurrentUser = async () => {
  const accessToken = cookies().get('accessToken')?.value

  let decodedToken = null

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken)

    return {
      _id: decodedToken.userId,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePhoto: decodedToken.profilePhoto,
      isDeleted: decodedToken.isDeleted,
    }
  }

  return decodedToken
}

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get('refreshToken')?.value

    console.log('REFRESH_TOKEN:', refreshToken)

    if (!refreshToken) {
      throw new Error('Refresh token not found')
    }

    const res = await axiosInstance.post('/auth/refresh-token', {
      refreshToken,
    })

    if (res.data.success) {
      const newAccessToken = res.data.accessToken
      cookies().set('accessToken', newAccessToken)

      return newAccessToken
    } else {
      throw new Error('Refresh token failed')
    }
  } catch (error) {
    console.error('Error refreshing token:', error)
    throw new Error('Failed to get new access token')
  }
}
