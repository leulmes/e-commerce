import { NextResponse } from "next/server";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import internal from "stream";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2024-09-30.acacia",
});

type Product = {
    id: number,
    name: string,
    price: number,
    image: string,
    quantity: number
};

export async function POST(request: Request) {
	const body = await request.json();
    const cartItems = body.cartItems;
    const returnUrl = body.returnUrl;

    const line_items = cartItems.map((item: Product) => {
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.image],
                },
                unit_amount: item.price * 100, // todo: get price from db, otherwise hacker can set price to 0
            },
            quantity: item.quantity,
            
        };
    });

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items,
		mode: "payment",
		success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${returnUrl}`,
        billing_address_collection: 'required',
	});

	return NextResponse.json({ sessionId: session.id });
}
