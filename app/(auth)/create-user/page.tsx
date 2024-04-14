'use client'
import registerUser from '@/actions/register'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import useAuthStore from '@/hooks/useAuthStore'
import { startSession } from '@/lib/session'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const CreateUserpage = () => {
  const { email, username, password, loader, setEmail, setUsername, setPassword, setLoader } = useAuthStore();

  const router = useRouter();
  const { toast } = useToast()


  const onSignup=()=>{

    setLoader(true);
    registerUser(username, email, password).then(
      (resp)=>{
        startSession(resp.user, resp.jwt);
        toast({
          variant: "success",
          description: "Account Created Successfull.",
        })
       
        setLoader(false);
        router.push('/')

      },
      (error)=>{
        setLoader(false);
        toast({
          variant: "destructive",
          description: "Something went wrong",
        })

      }
    ).finally(()=>{
      setLoader(false);
    })

  }
  return (
    <div className='flex items-baseline justify-center my-20'>

      <div className='flex flex-col items-center justify-center p-10 border border-gray-300'>
        <Image
        src="/logo.png" width={200} height={200} alt='logo'
        />

        <h2 className='font-bold text-3xl mt-4'>Create to Account</h2>
        <h2 className='text-gray-400'>Enter your email or password</h2>

        <div className='w-full flex flex-col gap-5 mt-8'>
        <Input
          placeholder='username'
          onChange={(e)=>setUsername(e.target.value)}
          />

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
          disabled={!(email && password)}
          onClick={onSignup}
          >
            {loader?<Loader2Icon className='animate-spin'/> : 'Sign in'}

            

            
          </Button>

          <p>Already have a account

          <br/>
          <Link href='/sign-in' className='text-green-600'>
        Click here to Sign In
        </Link>

          </p>


          


        </div>



      </div>



    </div>
  )
}

export default CreateUserpage