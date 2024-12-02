/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'

import React, { useState } from 'react'

import FormInput from '@/src/components/form/FormInput'
import { ImageUploader } from '@/src/components/ImageUploader'
import FormSelect from '@/src/components/form/FormSelect'
import { useUser } from '@/src/context/user.provider'
import { useCreateProduct } from '@/src/hooks/product.hook'

export default function AddProduct() {
  const { user } = useUser()

  const {
    mutate: handleCreateProduct,
    isPending: createProductPending,
    isSuccess,
  } = useCreateProduct()

  const categoryOptions = [
    { key: 'Web', label: 'Web' },
    { key: 'Software Engineering', label: 'Software Engineering' },
    { key: 'AI', label: 'AI' },
    { key: 'Data Science', label: 'Data Science' },
  ]

  const premiumOptions = [
    { key: 'true', label: 'Yes' },
    { key: 'false', label: 'No' },
  ]

  const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
      images: [],
      category: 'Web',
      isPremium: false,
    },
  })

  const { handleSubmit, setValue } = methods

  const onSubmit: SubmitHandler<FieldValues> = (productData) => {
    productData.vendorId = user?.email

    handleCreateProduct(productData)
  }

  return (
    <>
      <h1 className='p-8 text-2xl font-bold '>Add New Product</h1>

      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div className='flex flex-wrap gap-2 py-2'>
              <div className='flex-1 min-w-fit'>
                <FormInput label='Name' name='name' />
              </div>
            </div>

            {/* Description Input */}
            <div className='flex flex-wrap gap-2 py-2'>
              <div className='flex-1 min-w-fit'>
                <FormInput label='Description' name='description' />
              </div>
            </div>

            {/* Price Input */}
            <div className='flex flex-wrap gap-2 py-2'>
              <div className='flex-1 min-w-fit'>
                <FormInput type='number' label='Price' name='price' />
              </div>
            </div>

            {/* Discount Input */}
            <div className='flex flex-wrap gap-2 py-2'>
              <div className='flex-1 min-w-fit'>
                <FormInput type='number' label='Discount' name='discount' />
              </div>
            </div>

            {/* Inventory Input */}
            <div className='flex flex-wrap gap-2 py-2'>
              <div className='flex-1 min-w-fit'>
                <FormInput type='number' label='Inventory' name='inventory' />
              </div>
            </div>

            {/* Category Select */}
            <div className='flex flex-wrap gap-2 py-2'>
              <div className='flex-1 min-w-fit'>
                <FormSelect
                  label='Category'
                  name='category'
                  options={categoryOptions}
                />
              </div>
            </div>

            {/* Image Uploader */}
            <div className='flex flex-wrap gap-2 py-2'>
              <div className='flex-1 min-w-fit'>
                <ImageUploader name='images' />
              </div>
            </div>

            <Divider className='my-5' />

            {/* Submit Button */}
            <div className='flex justify-end'>
              <Button disabled={createProductPending} size='lg' type='submit'>
                Add Product
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
