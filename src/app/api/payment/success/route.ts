import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature')!;
  console.log('Received webhook event:', sig);

  try {
    const text = await request.text();
    const event = stripe.webhooks.constructEvent(
      text,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET_KEY as string
    );
    console.log('Received event:', event);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;

      console.log('Received checkout.session.completed event:', session);

      await prisma.tripReservation.create({
        data: {
          startDate: new Date(session.metadata.startDate),
          endDate: new Date(session.metadata.endDate),
          userId: session.metadata.userId,
          tripId: session.metadata.tripId,
          totalPaid: Number(session.metadata.totalPrice),
          guests: Number(session.metadata.guests),
        },
      });

      console.log('Reservation created successfully:', session);
    }

    return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to process event' }), { status: 500 });
  }
}
