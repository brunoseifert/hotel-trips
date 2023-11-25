import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const req = await request.json();

    // Logando o corpo da solicitação para depuração
    console.log('Request Body:', req);

    // Verificando se a viagem (trip) existe
    const trip = await prisma.trip.findUnique({
      where: {
        id: req.tripId
      }
    });

    // Logando informações sobre a viagem para depuração
    console.log('Trip:', trip);

    // Verificando se a viagem foi encontrada
    if (!trip) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: "TRIP_NOT_FOUND",
            message: "Viagem não encontrada."
          }
        }),
        { status: 404 }
      );
    }

    // Criando a reserva no banco de dados usando Prisma
    const reservation = await prisma.tripReservation.create({
      data: {
        tripId: req.tripId,
        userId: req.userId,
        startDate: req.startDate,
        endDate: req.endDate,
        totalPaid: req.totalPaid,
        guests: req.guests
      }
    });

    // Logando informações sobre a reserva para depuração
    console.log('Reservation:', reservation);

    // Respondendo com sucesso
    return new NextResponse(JSON.stringify({ success: true }), {
      status: 201
    });
  } catch (error) {
    // Capturando e logando erros
    console.error('Error creating reservation:', error);

    // Respondendo com um erro genérico em caso de falha
    return new NextResponse(
      JSON.stringify({
        error: {
          code: 'RESERVATION_CREATION_ERROR',
          message: 'Falha ao criar reserva.'
        }
      }),
      { status: 500 }
    );
  }
}
