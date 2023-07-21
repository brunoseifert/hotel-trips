import * as React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

interface TripLocationProps{
    location : string
    locationDescription: string
}

const TripLocation = ({location, locationDescription}: TripLocationProps) => {
    return ( 
        <div className='p-5'>
            <h2 className='font-semibold text-primaryDarker'>Localização</h2>
            <div className='relative h-[280px] w-full mt-5'>
                <Image src="/map-mobile.png" alt={location} fill style={{objectFit:"cover"}}/>    
            </div>   
            
            <h3 className='font-semibold text-primaryDarker text-sm mt-3'>{location}</h3> 
            <p className='text-xs text-primaryDarker mt-3 leading-5'>{locationDescription}</p>
            <Button variant='outlined' className='w-full mt-5'>Ver no Google Maps</Button>        
        </div>
     );
}
 
export default TripLocation;