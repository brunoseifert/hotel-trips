import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickSearch = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center p-5">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">Tente pesquisar por</h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col items-center gap-1">
          <Link href={`/trips/search?text=hotel`} className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={25} height={25} src="/hotel-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Hotel</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href="/trips/search?text=fazenda" className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={25} height={25} src="/farm-icon.png" alt="Fazenda" />
            <p className="text-sm lg:text-base text-grayPrimary">Fazenda</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href="/trips/search?text=Chalé" className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={25} height={25} src="/cottage-icon.png" alt="Chalé" />
            <p className="text-sm lg:text-base text-grayPrimary">Chalé</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href="/trips/search?text=pousada" className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={25} height={25} src="/inn-icon.png" alt="Pousada" />
            <p className="text-sm lg:text-base text-grayPrimary">Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;