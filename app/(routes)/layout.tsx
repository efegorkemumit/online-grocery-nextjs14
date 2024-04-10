import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

interface MainLayoutProps{
    children:React.ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
   <>
        <Navbar/>
        <main>
        {children}

        </main>
      
        
        </>
  )
}

export default MainLayout