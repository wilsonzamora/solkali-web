import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Home from './home'

const Inicio = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [router])
  

  return <Home />
}

export default Inicio