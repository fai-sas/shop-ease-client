'use client'

import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { Tabs, Tab } from '@nextui-org/tabs'
import { Card, CardHeader, CardBody } from '@nextui-org/card'

import FormController from '@/src/components/form/FormController'
import FormInput from '@/src/components/form/FormInput'
import {
  useCustomerRegistration,
  useVendorRegistration,
} from '@/src/hooks/auth.hook'

const RegisterPage = () => {
  const { mutate: handleCustomerRegistration, isPending: customerIsPending } =
    useCustomerRegistration()

  const { mutate: handleVendorRegistration, isPending: vendorIsPending } =
    useVendorRegistration()

  const customerOnSubmit = async (data) => {
    const userData = {
      password: data.password,
      customer: {
        name: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
      },
    }
    handleCustomerRegistration(userData)
  }

  const vendorOnSubmit = async (data) => {
    const vendorData = {
      password: data.password,
      vendor: {
        name: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
      },
    }
    handleVendorRegistration(vendorData)
  }

  const isPending = customerIsPending || vendorIsPending

  if (isPending) {
    return <h1 className='p-8 text-4xl font-bold text-center'>Loading...</h1>
  }

  return (
    <div className='container px-4 py-8 mx-auto'>
      <div className='max-w-3xl mx-auto'>
        <Tabs radius='full' aria-label='Register Tabs'>
          {/* CUSTOMER */}
          <Tab key='customer' title='Register as Customer'>
            <Card className='shadow-lg'>
              <CardHeader className='text-center'>
                <h3 className='text-xl font-bold'>Register as Customer</h3>
              </CardHeader>
              <CardBody className='space-y-4'>
                <FormController
                  defaultValues={{
                    name: '',
                    email: '',
                    contactNumber: '',
                    password: '',
                  }}
                  onSubmit={customerOnSubmit}
                >
                  <div className='space-y-4'>
                    <FormInput label='Name' name='name' size='lg' />
                    <FormInput label='Email' name='email' size='lg' />
                    <FormInput
                      label='Mobile Number'
                      name='contactNumber'
                      size='lg'
                    />
                    <FormInput
                      label='Password'
                      name='password'
                      size='lg'
                      type='password'
                    />
                  </div>
                  <Button type='submit' color='primary' className='w-full mt-4'>
                    Register
                  </Button>
                </FormController>
                <p className='text-center'>
                  Already have an account?{' '}
                  <Link href='/login' className='text-primary'>
                    Login
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Tab>

          {/* VENDOR */}
          <Tab key='vendor' title='Register as Vendor'>
            <Card className='shadow-lg'>
              <CardHeader className='text-center'>
                <h3 className='text-xl font-bold'>Register as Vendor</h3>
              </CardHeader>
              <CardBody className='space-y-4'>
                <FormController
                  defaultValues={{
                    name: '',
                    email: '',
                    contactNumber: '',
                    password: '',
                  }}
                  onSubmit={vendorOnSubmit}
                >
                  <div className='space-y-4'>
                    <FormInput label='Name' name='name' size='lg' />
                    <FormInput label='Email' name='email' size='lg' />
                    <FormInput
                      label='Mobile Number'
                      name='contactNumber'
                      size='lg'
                    />
                    <FormInput
                      label='Password'
                      name='password'
                      size='lg'
                      type='password'
                    />
                  </div>
                  <Button type='submit' color='primary' className='w-full mt-4'>
                    Register
                  </Button>
                </FormController>
                <p className='text-center'>
                  Already have an account?{' '}
                  <Link href='/login' className='text-primary'>
                    Login
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default RegisterPage
