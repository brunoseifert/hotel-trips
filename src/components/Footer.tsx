import * as React from 'react';
import Image from 'next/image';

 const Footer = () => {
    return ( 
    <div className='bg-walterWhite p-5 flex flex-col items-center'>
        <Image src="/Logo.png" width={133} height={23} alt='FullStackWeek'/>
        <p className='text-sm text-primaryDarker font-medium'>Todos os direitos reservador</p>

    </div> );
 }
  
 export default Footer;