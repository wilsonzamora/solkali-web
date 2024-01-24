import { useRouter } from 'next/router'

import { Flex, Text } from '@chakra-ui/react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

import { navOptions, nosotrosOptions } from './config'

interface IMobileMenu {
  toggleOptionSelected: (option: string) => void
  optionSelected: string | undefined
}

export const MobileMenu = (props: IMobileMenu) => {
  const router = useRouter()
  const path = router.pathname

  return (
    <Flex
      position='fixed'
      display={{ base: 'flex', md: 'none' }}
      top={{ base: '65px', md: '95px' }}
      left="0"
      width='100%'
      height='auto'
      zIndex={1000}
      backgroundColor='white'
      flexDir='column'
      alignItems='center'
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    >
      {navOptions.map(opt => (
        <Flex
          flexDir='column'
          key={opt.label}
          position='relative'
          alignItems='start'
          width='full'
          height='min-content'
          borderBottom="1px solid rgba(0, 0, 0, 0.1)"
          cursor='pointer'
          _hover={{shadow: 'md'}}
          onClick={
            opt.label !== 'NOSOTROS' ?
              () => router.push(opt.path) :
              () => props.toggleOptionSelected(opt.label)
          }
        >
          <Flex
            flexDir='row'
            fontSize={14}
            fontWeight={700}
            height={opt.label === 'NOSOTROS' ? '61px' : 'auto'}
            color={path === opt.path ? '#feb100' : '#004d89'}
            padding='20px'
            width='100%'
          >
            {opt.label === 'NOSOTROS' ? (
              <Flex width='full' justifyContent='space-between'>
                {opt.label}
                {props.optionSelected ?
                  <FaCaretUp color='#004d89' fontSize={19} /> :
                  <FaCaretDown color='#004d89' fontSize={19} />
                }
              </Flex>
            ) : (
              opt.label
            )}
          </Flex>

          {props.optionSelected === 'NOSOTROS' && opt.label === 'NOSOTROS' && (
            <Flex flexDir='column' height='auto' width='100%'>
              {nosotrosOptions.map(nopt => (
              <Flex
                flexDir='column'
                justifyContent='center'
                width='full'
                height='51px'
                paddingY='10px'
                paddingX='20px'
                key={nopt.label}
                borderTop="1px solid rgba(0, 0, 0, 0.1)"
                cursor='pointer'
                _hover={{shadow: 'md'}}
                onClick={(e) => {
                  e.stopPropagation()
                  router.push(`${opt.path}${nopt.path}`)
                }}
              >
                <Text
                  width='100%'
                  fontSize={12}
                  fontWeight={700}
                  paddingX='20px'
                  color={path === `${opt.path}${nopt.path}` ? '#feb100' : '#004d89'}
                >
                  - {nopt.label}
                </Text>
              </Flex>
            ))}
            </Flex>
            
          )}
        </Flex>
      ))}
    </Flex>
  )
}
