import Button from '@/components/Button';
import { Prisma } from '@prisma/client';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';

import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';
import { useRouter } from 'next/navigation';

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
  fetchReservations: () => void;
}

function UserReservationItem({
  reservation,
  fetchReservations,
}: UserReservationItemProps) {
  const router = useRouter();
  const { trip } = reservation;

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      return toast.error('Erro ao cancelar reserva');
    }

    toast.success('Reserva cancelada com sucesso!', {
      position: 'bottom-center',
    });

    fetchReservations();
  };

  return (
    <div>
      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              className="rounded-lg"
              src={trip.coverImage}
              alt={trip.name}
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex item-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary">{trip.location}</p>
            </div>
          </div>
        </div>

        <h1 className="font-semibold text-primaryDarker">Sobre a viagem</h1>
        <div className="flex flex-col mt-5 text-primaryDarker">
          <h3 className="text-sm">Data</h3>
          <div className="flex items-center gap-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
            {' - '}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
          </div>
          <h3 className="mt-5 text-sm">Hóspedes</h3>
          <p className="text-sm pb-5">{reservation.guests} hóspedes</p>

          <h3 className="text-primaryDarker font-semibold mt-3 pt-5 border-t border-solid border-grayLighter">
            Informações sobre o preço
          </h3>

          <div className="flex justify-between mt-1">
            <p className="text-primaryDarker text-sm mt-2">Toal:</p>
            <p className="font-medium text-primaryDarker text-sm">
              R${Number(reservation.totalPaid)}
            </p>
          </div>
          <Button className="mt-5" variant="danger" onClick={handleDeleteClick}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserReservationItem;
