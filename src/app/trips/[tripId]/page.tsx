import { prisma } from "@/lib/prisma";

import React from "react";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto lg:px-40 lg:pt-10">
      <TripHeader trip={trip} />
      <div className="flex flex-col lg:flex-row lg:mt-12 lg:gap-20">
        <div className="lg:order-2">
          <TripReservation
            trip={trip}
            tripId={trip.id}
            pricePerDay={trip.pricePerDay as any}
            tripStartDate={trip.startDate}
            tripEndDate={trip.endDate}
            maxGuests={trip.maxGuests}
          />
       </div>
       
      </div>
      <TripDescription description={trip.description}/>
      <TripHighlights highlights={trip.highlights}/>
      <TripLocation  location={trip.location} locationDescription={trip.locationDescription}/>
      
     
    </div>
  );
};

export default TripDetails;