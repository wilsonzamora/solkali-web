import React from 'react'
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding, FaRoad, FaTruck } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-[100%] bg-[#004d8a] h-[250px] flex flex-col justify-between'>
      <div className='w-[90%] mx-auto pt-[25px] text-white flex justify-between'>
        <div className='flex flex-col !w-[420px]'>
          <span className='border border-2 border-transparent !border-b-[#feb100] w-[50px]'>SERVICIOS</span>
          <div className='mt-[10px] !flex space-x-2 items-center'>
            <FaBuilding />
            <span className='w-[100%] text-justify text-[14px] font-[300]'>
              Construcción de edificios
            </span>
          </div>
          <div className='mt-[5px] !flex space-x-2 items-center'>
            <FaRoad />
            <span className='w-[100%] text-justify text-[14px] font-[300]'>
              Construcción de carreteras
            </span>
          </div>
          <div className='mt-[5px] !flex space-x-2 items-center'>
            <FaTruck />
            <span className='w-[100%] text-justify text-[14px] font-[300]'>
              Transporte de carga por carretera
            </span>
          </div>
        </div>

        <div className='flex flex-col !w-[420px]'>
          <span className='border border-2 border-transparent !border-b-[#feb100] w-[50px]'>CONTÁCTANOS</span>
          <div className='mt-[10px] !flex space-x-2 items-center'>
            <MdLocationOn className='!w-[16px] !h-[16px]' />
            <span className='w-[100%] text-justify text-[14px] font-[300]'>
              Calle los Pinos Mz “A” Lt 8
              Asoc. Gramalote Ñaña Lima – Lima
            </span>
          </div>
          <div className='mt-[5px] !flex space-x-2 items-center'>
            <IoMdMail />
            <span className='w-[100%] text-justify text-[14px] font-[300]'>
              gfsolkali@gmail.com
            </span>
          </div>
          <div className='mt-[5px] !flex space-x-2 items-center'>
            <IoLogoWhatsapp />
            <span className='w-[100%] text-justify text-[14px] font-[300]'>
              907 576 704 - 997 885 021
            </span>
          </div>
        </div>
      </div>

      <div className='text-white flex justify-center py-[10px] border border-transparent border-[0.5px] !border-t-[#feb100] text-[14px]'>
        <span>
          Globo Fast Solkali 2023  -  Todos los derechos reservados.
        </span>
      </div>
    </div>
  )
}

export default Footer