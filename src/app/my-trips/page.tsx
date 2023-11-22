'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Prisma } from '@prisma/client';
import UserReservationItem from './components/UserReservationItem';
import Button from '@/components/Button';
import Link from 'next/link';

function MyTrips() {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);

  const { status, data } = useSession();

  const router = useRouter();

  const fetchReservations = async () => {
    const response = await fetch(
      `/api/user/${(data?.user as any)?.id}/reservations`
    );
    const json = await response.json();

    setReservations(json);
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      return router.push('/');
    }

    fetchReservations();
  }, [status]);

  console.log(reservations);

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl lg:mb-5">
        Minhas Viagens
      </h1>
      {reservations.length > 0 ? (
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-14">
          {reservations?.map((reservation) => (
            <UserReservationItem
              key={reservation.id}
              reservation={reservation}
              fetchReservations={fetchReservations}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col lg:max-w-[500px]">
          <p className=" mt-3 font-medium text-primaryDarker">
            Você ainda não tem nenhuma reserva!
          </p>

          <Link href="/">
            <Button className="w-full mt-4 lg:mt-5">Fazer reserva</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyTrips;
