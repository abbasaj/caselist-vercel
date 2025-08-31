import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  // In production verify signature using STRIPE_WEBHOOK_SECRET
  const event = await req.json();
  console.log("Stripe webhook event:", event.type);
  return NextResponse.json({ received: true });
}
