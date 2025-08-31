import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { topic, start_time } = await req.json();
  return NextResponse.json({ id: 'zoom-stub-1', topic, start_time, join_url: 'https://zoom.us/j/123456' });
}
