import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { SnackbarProvider } from 'notistack'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <>
      {domLoaded && (
        <ChakraProvider>
          <SnackbarProvider maxSnack={3}>
            <Component {...pageProps} /> 
          </SnackbarProvider>
        </ChakraProvider>
      )}
    </>
  )
}