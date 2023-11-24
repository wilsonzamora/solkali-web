
import Image from 'next/image'
import React from 'react'
import { WebLayout } from 'src/components'

const Home = () => {
  return (  
    <WebLayout>
      <div className='w-[100%]'>

        <div className='w-[90%] mx-auto flex justify-between'>
          {/* info */}
          <div className='flex flex-col w-[49%]'>
            <span className='text-[36px] font-[500] text-[#004d89]'>
              ¿QUIÉNES SOMOS?
            </span>
            <span className='font-roboto text-[#707070]/80 mt-[10px] text-justify'>
              <span className='mr-[4px] text-black font-[500]'>GLOBO FAST SOLKALI EIRL</span>
              es una empresa formada por un equipo de profesionales y técnicos, quienes han asumido el desafío de formar una empresa de construcción de alto estándar en calidad, seguridad, salud ocupacional y respeto por el medio ambiente en el mercado nacional e internacional, que aporte valor a los proyectos de sus clientes y supere sus exspectativas, materializando sus anhelos y aumentando su competitividad como organización.
              {/* Brindar soluciones integrales de construcción, para satisfacer las necesidades de nuestros clientes mejo- rando sus expectativas de inversión, innovando con las mejores tendencias, tecnologías y motivando al desarrollo profesional de nuestro equipo humano, teniendo presente que es el soporte principal de nuestra empresa. */}
            </span>
          </div>

          {/* image */}
          <div className='w-[49%] flex justify-end'>
            <Image src='/img/quienessomos2.jpeg' alt='quienessomos-logo' width={500} height={400}/>
          </div>
          {/* <span className='text-[36px] font-[500] text-[#004d89] mt-[10px]'>
            MISIÓN
          </span>
          <span className='font-roboto text-[#707070] mt-[8px]'>
            Brindar soluciones integrales de construcción, para satisfacer las necesidades de nuestros clientes mejorando sus expectativas de inversión, innovando con las mejores tendencias, tecnologías y motivando al desarrollo profesional de nuestro equipo humano, teniendo presente que es el soporte principal de nuestra empresa.
          </span> */}
        </div>
      </div>
    </WebLayout>
  )
}

export default Home