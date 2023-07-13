"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip
}

const TripReservation = ({trip}: TripReservationProps) => {
  return(
    <div>
        <div className="flex flex-col px-5">
          <div className="flex gap-4">
            <DatePicker placeholderText="Data de início" onChange={() =>{}} className="w-full"/>
            <DatePicker placeholderText="Data final" onChange={() =>{}} className="w-full"/>
          </div>

          <Input placeholder={`Número de hóspedes (max:${trip.maxGuests})`}className="mt-4"/>
          <div className="flex justify-between mt-2">
            <p className="font-mediu text-sm text-primaryDarker">Total: </p>
            <p className="font-mediu text-sm text-primaryDarker">R$ 2.500 </p>
          </div>

          <div className="pb-10 border-b border-b-primaryLighter w-full">
            <Button className="mt-3 w-full">Reservar agora</Button>
          </div>
        </div>
    </div>
  )
};

export default TripReservation;