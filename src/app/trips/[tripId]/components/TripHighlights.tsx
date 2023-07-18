import * as React from 'react';
import Image from 'next/image';

interface TripHighlightsProps{
    highlights: string
}

const TripHighlights = ({highlights}: TripHighlightsProps) => {
    return ( 
        <div className='flex flex-col p-5'>
            <h1 className='font-semibold text-primaryDarker mb-2'>Destaques</h1>

            <div className='flex flex-wrap gap-y-2'>
                {highlights.map((highlight, index) => 
                <div key={highlight} className='flex items-center gap-2 w-1/2'>
                    <Image src="/check-icon.png" width={15} height={15} alt={highlight}/>

                    <p className='text-grayPrimary text-xs'>{highlight}</p>
                </div>)}
            </div>
        </div>
        
     );
}
 
export default TripHighlights;