import Stripe from "stripe";

type Item = {
    id: string;
    description: string;
    quantity: number;
    amount_total: number;
};

async function getStripeSession(sessionId: string) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_SITE_URL}/api/stripe-session?session_id=${sessionId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		}
	);

	if (!res.ok) {
		throw new Error("Failed to fetch Stripe session");
	}

	return res.json();
}

export default async function SuccessPage({
	searchParams,
}: {
	searchParams: { session_id?: string };
}) {
	const formatAddress = (address: Stripe.Address) => {
		const { line1, line2, city, state, postal_code, country } = address;
		const formattedAddress = [line1, line2, city, state, postal_code, country]
			.filter(Boolean)
			.join(", ");
		return formattedAddress || "N/A";
	};
	// check if session_id exists
	if (!searchParams.session_id) {
		return <div>No session found</div>;
	}

	try {
		const { stripeSession } = await getStripeSession(searchParams.session_id);

		return (
			<div>
				<h1>Payment Successful</h1>
				<h1>Order Summary</h1>
				<p>Order ID: {stripeSession.id}</p>
				<p>Total: {stripeSession.amount_total / 100}</p>
				{/* <p> this gives an error
					Shipping Address:{" "}
					{formatAddress(stripeSession.shipping_details.address)}
				</p> */} 
				<div>
					<h3>Line Items</h3>
					{stripeSession.line_items.data.map((item: Item) => (
						<div key={item.id}>
							<p>{item.description}</p>
							<p>Quantity: {item.quantity}</p>
							<p>Price: ${item.amount_total / 100}</p>
						</div>
					))}
				</div>
			</div>
		);
	} catch (error) {
		return <div>Error retrieving session</div>;
	}
}
