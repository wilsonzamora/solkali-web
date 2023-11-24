import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Carousel } from 'antd';
import Footer from './Footer';
import { carouselImages, carouselImages2, navOptions, nosotrosOptions } from './config';


interface IWebLayout {
  children: React.ReactNode
}

export const WebLayout = (props: IWebLayout) => {
  const { children } = props
  const [isHoverButton, setIsHoverButton] = useState(false)
  const [buttonHovered, setButtonHovered] = useState<string | undefined>(undefined)
  const router = useRouter()
  const path = router.pathname

  const contentStyle: any = (backgroundImage: string) => {
    return {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      backgroundImage: backgroundImage
    }
  };

  const handleEnterMouse = (opt: string) => {
    setIsHoverButton(true)
    setButtonHovered(opt)
  }
  const handleLeaveMouse = () => {
    setIsHoverButton(false)
    setButtonHovered(undefined)
  }
  return (
    <div className='w-screen min-h-screen'>

      {/* navbar */}
      <div className='w-[100%] text-white'>
        <div className='w-[91%] mx-auto flex justify-between items-center pt-[8px]' >
          <div className='cursor-pointer px-[10px] rounded'>
            <Image src='/img/logo1.png' alt='solkali-logo' width={300} height={80}/>
          </div>
          {navOptions.map(opt => (
            <div
              key={opt.label}
              className={`font-[500] flex justify-center items-end pb-[10px] text-[16px] text-[#004d89] h-[90px] px-5
              hover:text-[#feb100] hover:cursor-pointer border border-b-[2px] border-transparent hover:border-b hover:border-b-[2px]
              hover:border-b-[#feb100] relative mb-[1px] ${path.includes(opt.path) && '!text-[#feb100] border-b-[2px] !border-b-[#feb100]'}
              
              `}
              onMouseEnter={() => handleEnterMouse(opt.label)}
              onMouseLeave={handleLeaveMouse}
              onClick={
                opt.label !== 'NOSOTROS' ?
                  () => router.push(opt.path) :
                  () => router.push('/nosotros/mision')
              }
            >
              <span>
                {opt.label}
              </span>
              {buttonHovered === 'NOSOTROS' && opt.label === 'NOSOTROS' && (
                <div
                  className={`absolute transicion-div top-[103%] left-[0px] flex flex-col bg-white shadow shadow-md w-[200px]
                  ${isHoverButton ? 'visible' : 'invisible'} text-[13px] font-[500] border !border-t-[#feb100] !z-[1000]`}
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
        </div>
      </div>

      <div className='w-[100%]'>
        <Carousel
          autoplay
          autoplaySpeed={3500}
          className='!z-[900] border border-black'
          style={{ width: '100vw' }}
        >
          {carouselImages2.map((img, idx) => (
            <div key={idx} className='flex justify-center items-center'>
              {/* <div style={contentStyle(img.url)} className='w-[100%] !h-[300px] flex items-end justify-end pb-[50px]'/> */}
              <Image src={img.url} alt='image' width={1440} height={300} layout='responsive' style={{ width: '100vw' }} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* content */}
      <div className='w-[100%] py-[70px] min-h-[372px]'>
        {children}
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}
