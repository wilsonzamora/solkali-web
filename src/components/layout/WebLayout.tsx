import { useState } from 'react'

import { Flex, useBreakpointValue } from '@chakra-ui/react';

import Footer from './Footer';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { CarouselComponent } from './Carousel';

interface IWebLayout {
  children: React.ReactNode
}

export const WebLayout = (props: IWebLayout) => {
  const { children } = props
  const [isHoverButton, setIsHoverButton] = useState(false)
  const [buttonHovered, setButtonHovered] = useState<string | undefined>(undefined)

  const [showMobileOptions, setShowMobileOptions] = useState(false)
  const [optionSelected, setOptionSelected] = useState<string | undefined>(undefined)

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleEnterMouse = (opt: string) => {
    setIsHoverButton(true)
    setButtonHovered(opt)
  }
  const handleLeaveMouse = () => {
    setIsHoverButton(false)
    setButtonHovered(undefined)
  }

  const handleMobileMenuClick = (e: any) => {
    e.stopPropagation()
    setShowMobileOptions(!showMobileOptions)
  }
  const toggleOptionSelected = (option: string) => {
    if (optionSelected) {
      setOptionSelected(undefined)
    } else {
      setOptionSelected(option)
    }
  }

  return (
    <div className='w-screen min-h-screen'>
      <Navbar
        isHoverButton={isHoverButton}
        buttonHovered={buttonHovered}
        handleEnterMouse={handleEnterMouse}
        handleLeaveMouse={handleLeaveMouse}
        handleMobileMenuClick={handleMobileMenuClick}
        showMobileOptions={showMobileOptions}
      />

      {isMobile && showMobileOptions && (
        <MobileMenu
          toggleOptionSelected={toggleOptionSelected}
          optionSelected={optionSelected}
        />
      )}

      <CarouselComponent />

      <Flex width='100%' paddingY={{base: '50px', md: '70px'}} minHeight='372px'>
        {children}
      </Flex>

      <Footer />
    </div>
  )
}
