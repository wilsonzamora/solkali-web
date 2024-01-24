
import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { WebLayout } from 'src/components'

const Valores = () => {
  return (
    <WebLayout>
      <Flex width='full' >
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          width={{ base: '100%', md: '90%' }}
          marginX='auto'
          justifyContent='space-between'
        >
          <Flex
            flexDir='column'
            width={{ base: '100%', md: '49%' }}
            paddingX={{base: '30px', md: '0px'}}
          >
            <Text fontSize={{ base: 25, md: 36 }} fontWeight={700} color='#004d89'>
              Valores
            </Text>
            <Text color='#707070' opacity={0.8} marginTop='10px' textAlign='justify' className='font-roboto'>
              Apostamos por una larga y reconocida trayectoria dentro y fuera del Perú, logrando entrar en la vida de miles de personas, construyendo en la mejora de las ciudades, basada en la experiencia acumulada de nuestros socios, con la apuesta por la tecno- logía, por nuevos e innovadores sistemas constructivos.
            </Text>
          </Flex>

          <Flex
            width={{ base: '100%', md: '49%' }}
            justifyContent={{ base: 'center', md: 'end' }}
            marginTop={{ base: '20px', md: '0px' }}
          >
            <Image
              src='/img/quienessomos2.jpeg'
              alt='quienessomos-logo'
              width={{ base: '300px', md: '400px' }}
              height={{ base: '200px', md: '300px' }}
            />
          </Flex>
        </Flex>
      </Flex>
    </WebLayout>
  )
}

export default Valores