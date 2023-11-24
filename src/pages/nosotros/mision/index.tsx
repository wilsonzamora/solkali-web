
import Image from 'next/image'
import React from 'react'
import { WebLayout } from 'src/components'

const Mision = () => {
  return (
    <WebLayout>
      <div className='w-[100%]'>

        <div className='w-[90%] mx-auto flex justify-between'>
          {/* info */}
          <div className='flex flex-col w-[49%]'>
            <span className='text-[36px] font-[500] text-[#004d89]'>
              MISIÓN
            </span>
            <span className='font-roboto text-[#707070]/80 mt-[10px] text-justify'>
              Brindar soluciones integrales de construcción, para satisfacer las necesidades de nuestros clientes mejorando sus expectativas de inversión, innovando con las mejores tendencias, tecnologías y motivando al desarrollo profesional de nuestro equipo humano, teniendo presente que es el soporte principal de nuestra empresa.
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

export default Mision