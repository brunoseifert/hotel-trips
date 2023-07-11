"use client";

import Button from '@/components/Button';
import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import React from 'react';


const TripSearch = () =>{
    return(
        <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat lg:py-28">
            <h1 className='font-semibold text-2xl text-primaryDarker text-center'>
                Encontre sua próxima <span className='text-primary'>viagem</span>
            </h1>
        
        <div className='flex flex-col'>
            <Input placeholder="Onde você quer ir?"/>
        </div>

        <div className='flex gap-4 mt-5'>
            <DatePicker placeholderText='Data de ida' onChange={() => {}} className='w-full'/>
            <CurrencyInput placeholder='Orçamento'/>
        </div>

        <Button  className="w-full my-5 lg:h-fit">
          Buscar
        </Button>
    </div>
    );

};

export default TripSearch;
