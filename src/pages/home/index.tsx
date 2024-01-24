import { Flex, Image, Text } from '@chakra-ui/react'

import { WebLayout } from 'src/components'

const Home = () => {
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
              ¿QUIÉNES SOMOS?
            </Text>
            <Text color='#707070' opacity={0.8} marginTop='10px' textAlign='justify' className='font-roboto'>
              <Text
                marginRight='10px'
                color='black'
                fontWeight={500}
                display='inline'
              >
                GLOBO FAST SOLKALI EIRL
              </Text>
              es una empresa formada por un equipo de profesionales y técnicos, quienes han asumido el desafío de
              formar una empresa de construcción de alto estándar en calidad, seguridad, salud ocupacional y respeto
              por el medio ambiente en el mercado nacional e internacional, que aporte valor a los proyectos de sus
              clientes y supere sus exspectativas, materializando sus anhelos y aumentando su competitividad como organización.
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

export default Home