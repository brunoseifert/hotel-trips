import { prisma } from "@/app/lib/prisma";
import React, {useState} from "react";

const getTrips = async ( ) => {
    const trips = await prisma.trip.findMany({});
    return trips;
};

const Trips = async() => {
    const data = await getTrips();

    console.log({data});

    return <div>Trips</div>;
};

export default Trips;
