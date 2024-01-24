
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { WebLayout } from 'src/components'

const Servicios = () => {
  return (
    <WebLayout>
      <Flex flexDirection='column' width='100%'>
        <Flex fontSize={18} fontWeight={600} width='100%' paddingX='16px'>Servicios</Flex>
        <Flex width='100%' justifyContent='center'>Próximamente...</Flex>
      </Flex>
    </WebLayout>
  )
}

export default Servicios