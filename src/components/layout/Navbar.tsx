import { useRouter } from 'next/router'

import { Button, Flex, Image } from '@chakra-ui/react'
import { ImMenu3, ImMenu4 } from "react-icons/im";

import { navOptions, nosotrosOptions } from './config'


interface INavbar {
  isHoverButton: boolean
  buttonHovered: string | undefined
  handleEnterMouse: (option: string) => void
  handleLeaveMouse: () => void
  handleMobileMenuClick: (e: any) => void
  showMobileOptions: boolean
}

export const Navbar = (props: INavbar) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <Flex width='100%' height={{ base: '65px', md: '95px' }}>
      <Flex
        height={{ base: '65px', md: '95px' }}
        paddingX={{ base: '10px', md: '20px' }}
        paddingTop='8px'
        alignItems='center'
        justifyContent='space-between'
        backgroundColor='white'
        position='fixed'
        left='0'
        top='0'
        zIndex={1000}
        width={{ base: '100%', md: '100%' }}
        marginX='auto'
        borderBottom="2px solid rgba(0, 0, 0, 0.1)"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Flex
          cursor='pointer'
          onClick={() => router.push('/')}
          paddingX={{ base: '4px', md: '10px' }}
          width={{ base: '180px', md: '300px' }}
          height={{ base: '65px', md: '95px' }}
        >
          <Image src='/img/logo1.png' alt='solkali-logo' width='300px' height={{ base: '65px', md: '90px' }}/>
        </Flex>

        <Flex gap={2} display={{ base: 'none', md: 'flex' }}>
          {navOptions.map(opt => (
            <div
              key={opt.label}
              className={`font-[500] flex justify-center items-end pb-[10px] text-[16px] text-[#004d89] h-[90px] px-5
              hover:text-[#feb100] hover:cursor-pointer border border-b-[2px] border-transparent hover:border-b hover:border-b-[2px]
              hover:border-b-[#feb100] relative mb-[1px]
              ${(path === opt.path || path.includes('/nosotros') && opt.path.includes('/nosotros')) && '!text-[#feb100] border-b-[2px] !border-b-[#feb100]'}`}
              onMouseEnter={() => props.handleEnterMouse(opt.label)}
              onMouseLeave={props.handleLeaveMouse}
              onClick={
                opt.label !== 'NOSOTROS' ?
                  () => router.push(opt.path) :
                  () => router.push('/nosotros/mision')
              }
            >
              <span>
                {opt.label}
              </span>
              {props.buttonHovered === 'NOSOTROS' && opt.label === 'NOSOTROS' && (
                <div
                  className={`absolute transicion-div top-[103%] left-[0px] flex flex-col bg-white shadow shadow-md w-[200px]
                  ${props.isHoverButton ? 'visible' : 'invisible'} text-[13px] font-[500] border !border-t-[#feb100] !z-[1000]`}
                >
                  {nosotrosOptions.map(nopt => (
                    <div
                      key={nopt.label}
                      className='!text-black hover:bg-gray-300 px-5 py-2 flex items-center !cursor-pointer'
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push(`${opt.path}${nopt.path}`)
                      }}
                    >
                      {nopt.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Flex>

        <Flex display={{ base: 'block', md: 'none' }} textColor='black'>
          <Button paddingX='4px' paddingY='2px' onClick={(e) => props.handleMobileMenuClick(e)} backgroundColor='white'>
            {props.showMobileOptions ? <ImMenu4 fontSize={26}/> : <ImMenu3 fontSize={26}/>}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
