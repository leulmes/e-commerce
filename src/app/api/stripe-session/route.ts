import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const stripeSecret = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecret) {
        return NextResponse.json(
            { error: 'Stripe secret key not found' },
            { status: 500}
        );
    }

    const stripe = new Stripe(stripeSecret, {
        apiVersion: '2024-09-30.acacia',
    });

    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
        return NextResponse.json(
            { error: 'Session ID is required' },
            { status: 400 }
        );
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['line_items.data.price.product'],
        });

        return NextResponse.json({ stripeSession: session });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to retrieve session' },
            { status: 404 }
        );
    }
}