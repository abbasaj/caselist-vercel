import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
export async function POST(req: NextRequest) {
  const { amountCents, currency } = await req.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: "2024-06-20" });
  const intent = await stripe.paymentIntents.create({ amount: amountCents, currency: currency||'usd', capture_method: 'manual' });
  return NextResponse.json({ clientSecret: intent.client_secret, id: intent.id });
}
