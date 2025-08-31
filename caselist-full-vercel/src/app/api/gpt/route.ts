import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { title, answers } = await req.json();
  const summary = `Case Title: ${title}\nArea: ${answers.area}\nLocation: ${answers.location}\nDetails: ${answers.details}\n\nFormal Summary:\nThe client seeks help in ${answers.area}.`;
  return NextResponse.json({ summary });
}
