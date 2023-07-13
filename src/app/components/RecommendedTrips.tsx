import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import React from "react";

const RecommendedTrips = async () => {
    const data = await fetch("http://localhost:3000/hello").then((res) => res.json())
    return(
        <div>
            <div className="container mx-auto my-5">
               <div className="flex items-center p-5">
                    <div className="w-full h-[1px] bg-grayPrimary mx-2"></div>
                    <h2 className="font-medium text-grayPrimary whitespace-nowrap mx-1">Destinos Recomendados</h2>
                    <div className="w-full h-[1px] bg-grayPrimary mx-2"></div>
                </div>
            </div>

            <div className="flex flex-col items-center mt-5 gap-5">
            {data.map((trip: Trip)=>(
                <TripItem key={trip.id} trip={trip}/>
            ))}
            </div>
        </div>
    );
};

export default RecommendedTrips; 