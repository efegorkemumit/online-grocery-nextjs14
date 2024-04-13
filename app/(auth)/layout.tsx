import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

interface AuthLayoutPageProps{
    children: React.ReactNode
}

const AuthLayoutPage = ({children}:AuthLayoutPageProps) => {
  return (
    <div>  <Navbar/>
    <main>
    {children}

    </main>

    <Footer/></div>
  )
}

export default AuthLayoutPage