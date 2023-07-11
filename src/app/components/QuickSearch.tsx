import Image from "next/image";
import React from "react";

const QuickSearch = () =>{
    return(
        <div>
            <div className="container mx-auto">
                <div className="flex items-center p-5">
                    <div className="w-full h-[1px] bg-grayPrimary mx-2"></div>
                    <h2 className="font-medium text-grayPrimary whitespace-nowrap mx-1">Tente pesquisar por</h2>
                    <div className="w-full h-[1px] bg-grayPrimary mx-2"></div>
                </div>
            </div>

            <div className="flex justify-evenly">
                <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src = "/hotel-icon.png" alt="Hotel"/>
                <p className="text-sm text-grayPrimary">Hotel</p>
                </div> 

                <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src = "/farm-icon.png" alt="Hotel"/>
                <p className="text-sm text-grayPrimary">Fazendas</p>
                </div> 

                <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src = "/cottage-icon.png" alt="Hotel"/>
                <p className="text-sm text-grayPrimary">Chalés</p>
                </div> 

                <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src = "/inn-icon.png" alt="Hotel"/>
                <p className="text-sm text-grayPrimary">Pousada</p>
                </div>            
            </div>
        </div>
    )
}

export default QuickSearch;