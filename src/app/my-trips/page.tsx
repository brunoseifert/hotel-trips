'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Prisma } from '@prisma/client';
import Link from 'next/link';

import UserReservationItem from './components/UserReservationItem';
import Button from '@/components/Button';

const MyTrips = () => {
  const { status, data } = useSession();
  const router = useRouter();
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);

  // Usando useCallback para envolver a definição da função
  const fetchReservations = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/user/${(data?.user as any)?.id}/reservations`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch reservations');
      }

      const json = await response.json();
      setReservations(json);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      // Adicione lógica para lidar com erros, por exemplo, exibir uma mensagem para o usuário
    }
  }, [data?.user]);

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'unauthenticated') {
        return router.push('/');
      }

      if (status === 'authenticated' && !data?.user) {
        // Lógica para lidar com o caso em que o usuário autenticado não tem dados
      }

      fetchReservations();
    };

    fetchData();
  }, [status, data?.user, fetchReservations, router]);


  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl lg:mb-5">
        Minhas Viagens
      </h1>
      {reservations.length > 0 ? (
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-14">
          {reservations?.map((reservation) => (
            <UserReservationItem
              fetchReservations={fetchReservations}
              key={reservation.id}
              reservation={reservation}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col lg:max-w-[500px]">
          <p className="mt-2 font-medium text-primaryDarker">
            Você ainda não tem nenhuma reserva! =(
          </p>

          <Link href="/">
            <Button className="w-full mt-2 lg:mt-5">Fazer reserva</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
