import { Flex, Text } from "@chakra-ui/react";

import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding, FaRoad, FaTruck } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      flexDir='column'
      justifyContent='space-between'
      width='100%'
      background='#004d8a'
      minHeight='250px'
    >
      <Flex
        flexDir={{ base: 'column' ,md: 'row' }}
        width={{ base: '100%', md: '90%' }}
        marginX='auto'
        paddingTop='25px'
        color='white'
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems={{ base: 'center' }}
        gap={{ base: '10px' }}
      >
        <Flex flexDir='column' width={{ base: '100%', md: '420px' }} paddingX={{ base: '30px', md: '0px' }}>
          <Text borderBottom='2px solid #feb100' width='min-content' marginX={{ base: 'auto', md: '0px' }} >
            SERVICIOS
          </Text>
          <Flex marginTop='10px' gap='8px' alignItems='center'>
            <FaBuilding />
            <Text width='100%' textAlign='justify' fontSize={14} fontWeight={400}>
              Construcción de edificios
            </Text>
          </Flex>
          <Flex marginTop='5px' gap='8px' alignItems='center'>
            <FaRoad />
            <Text width='100%' textAlign='justify' fontSize={14} fontWeight={400}>
              Construcción de carreteras
            </Text>
          </Flex>
          <Flex marginTop='5px' gap='8px' alignItems='center'>
            <FaTruck />
            <Text width='100%' textAlign='justify' fontSize={14} fontWeight={400}>
              Transporte de carga por carretera
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexDir='column'
          width={{ base: '100%', md: '420px' }}
          paddingX={{ base: '30px', md: '0px' }}
          marginTop={{ base: '20px', md: '0px' }}
        >
          <Text borderBottom='2px solid #feb100' width='min-content' marginX={{ base: 'auto', md: '0px' }} >
            CONTÁCTANOS
          </Text>
          <Flex marginTop='10px' gap='8px' alignItems='center'>
            <MdLocationOn className='!w-[16px] !h-[16px]' />
            <Text width='100%' textAlign='justify' fontSize={14} fontWeight={300}>
              C. Los Pinos Mz “A” Lt 8 Ñaña, Lima – Lima
            </Text>
          </Flex>
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
        </Flex>
      </Flex>

      <div className='text-white flex justify-center py-[10px] border border-transparent border-[0.5px] !border-t-[#feb100] text-[14px] mt-[15px]'>
        <span>
          Globo Fast Solkali 2023  -  Todos los derechos reservados.
        </span>
      </div>
    </Flex>
  )
}

export default Footer