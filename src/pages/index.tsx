import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Home from './home'

const Inicio = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [router])
  

  return <Home />
}

export default Inicio