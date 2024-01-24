
import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { WebLayout } from 'src/components'

const Mision = () => {
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
              MISIÓN
            </Text>
            <Text color='#707070' opacity={0.8} marginTop='10px' textAlign='justify' className='font-roboto'>
              Brindar soluciones integrales de construcción, para satisfacer las necesidades de nuestros clientes mejorando sus expectativas de inversión, innovando con las mejores tendencias, tecnologías y motivando al desarrollo profesional de nuestro equipo humano, teniendo presente que es el soporte principal de nuestra empresa.
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

export default Mision