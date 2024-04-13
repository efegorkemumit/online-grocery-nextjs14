'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignInpage = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const [loader, setLoader] = useState();
  return (
    <div className='flex items-baseline justify-center my-20'>

      <div className='flex flex-col items-center justify-center p-10 border border-gray-300'>
        <Image
        src="/logo.png" width={200} height={200} alt='logo'
        />

        <h2 className='font-bold text-3xl mt-4'>Sign in to Account</h2>
        <h2 className='text-gray-400'>Enter your email or password</h2>

        <div className='w-full flex flex-col gap-5 mt-8'>
          <Input
          placeholder='name@example.com'
          onChange={(e)=>setEmail(e.target.value)}
          />
            <Input
            type='password'
          placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)}
          />
          <Button
          disabled={!(email && password)}>
            {loader?<Loader2Icon className='animate-spin'/> : 'Sign in'}

            

            
          </Button>

          <p>Dont' have a account ?

          <br/>
          <Link href='/create-user' className='text-green-600'>
        Click here to create new account
        </Link>

          </p>


          


        </div>



      </div>



    </div>
  )
}

export default SignInpage