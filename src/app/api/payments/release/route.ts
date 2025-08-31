import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
export async function POST(req: NextRequest) {
  const { paymentIntentId } = await req.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: "2024-06-20" });
  await stripe.paymentIntents.capture(paymentIntentId);
  return NextResponse.json({ ok: true });
}
