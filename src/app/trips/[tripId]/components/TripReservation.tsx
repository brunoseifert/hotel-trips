'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { add, differenceInDays } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface TripReservationProps {
  tripId: string;
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  pricePerDay: number;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservation = ({
  tripId,
  maxGuests,
  tripStartDate,
  tripEndDate,
  pricePerDay,
}: TripReservationProps) => {
  const [isCreatingCheckoutSession, setisCreatingCheckoutSession] =
    useState(false);

  const { data } = useSession();

  const session = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<TripReservationForm>();

  const router = useRouter();

  const onSubmit = async (data: TripReservationForm) => {
    if (!session?.user) {
      return alert('Faça login para realizar uma reserva!');
    }

    setisCreatingCheckoutSession(true);

    const response = await fetch('/api/trips/check', {
      method: 'POST',
      body: Buffer.from(
        JSON.stringify({
          startDate: data.startDate,
          endDate: data.endDate,
          tripId,
        })
      ),
    });

    const res = await response.json();

    if (res?.error?.code === 'TRIP_ALREADY_RESERVED') {
      setError('startDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      });

      setisCreatingCheckoutSession(false);

      return setError('endDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      });
    }

    if (res?.error?.code === 'INVALID_START_DATE') {
      setisCreatingCheckoutSession(false);

      return setError('startDate', {
        type: 'manual',
        message: 'Data inválida.',
      });
    }

    if (res?.error?.code === 'INVALID_END_DATE') {
      setisCreatingCheckoutSession(false);

      return setError('endDate', {
        type: 'manual',
        message: 'Data inválida.',
      });
    }

    router.push(
      `/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${
        data.guests
      }`
    );
  };

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  return (
    <div className="flex flex-col px-5 lg:min-w-[380px] lg:p-5 lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md">
      <p className="text-xl hidden text-primaryDarker mb-4 lg:block">
        <span className="font-semibold">R${pricePerDay}</span> por dia
      </p>

      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: 'Data inicial é obrigatória.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText="Data de Início"
              className="w-full"
              minDate={new Date()}
            />
          )}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: 'Data final é obrigatória.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText="Data Final"
              className="w-full"
              maxDate={tripEndDate}
              // minDate={startDate ?? tripStartDate}
              minDate={add(startDate!, { days: 1 })}
              disabled={!startDate}
            />
          )}
        />
      </div>

      <Input
        {...register('guests', {
          required: {
            value: true,
            message: 'Número de hóspedes é obrigatório.',
          },
          max: {
            value: maxGuests,
            message: `Número de hóspedes não pode ser maior que ${maxGuests}.`,
          },
        })}
        placeholder={`Número de hóspedes (max: ${maxGuests})`}
        className="mt-4"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
        type="number"
        max={maxGuests}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? `R$${differenceInDays(endDate, startDate) * pricePerDay}` ?? 1
            : 'R$0'}
        </p>
      </div>

      <div className="pb-10 border-b border-b-grayLighter w-full lg:border-none lg:pb-0">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          disabled={isCreatingCheckoutSession}
          className="mt-3 w-full"
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
