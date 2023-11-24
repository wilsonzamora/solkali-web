import { WebLayout } from '@/components'
import Image from 'next/image'
import React from 'react'

const Valores = () => {
  return (
    <WebLayout>
      <div className='w-[100%]'>

        <div className='w-[90%] mx-auto flex justify-between'>
          {/* info */}
          <div className='flex flex-col w-[49%]'>
            <span className='text-[36px] font-[500] text-[#004d89]'>
              VISIÓN
            </span>
            <span className='font-roboto text-[#707070]/80 mt-[10px] text-justify'>
              Apostamos por una larga y reconocida trayectoria dentro y fuera del Perú, logrando entrar en la vida de miles de personas, construyendo en la mejora de las ciudades, basada en la experiencia acumulada de nuestros socios, con la apuesta por la tecno- logía, por nuevos e innovadores sistemas constructivos.
            </span>
          </div>

          {/* image */}
          <div className='w-[49%] flex justify-end'>
            <Image src='/img/quienessomos2.jpeg' alt='quienessomos-logo' width={500} height={400}/>
          </div>
        </div>
      </div>
    </WebLayout>
  )
}

export default Valores