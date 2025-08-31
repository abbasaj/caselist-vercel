import { NextRequest } from "next/server";
import { PDFDocument, StandardFonts } from "pdf-lib";

export async function POST(req: NextRequest) {
  const { title, summary } = await req.json();
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const times = await pdfDoc.embedFont(StandardFonts.Helvetica);
  page.drawText("Case Summary", { x: 50, y: 700, size: 18, font: times });
  page.drawText(`Title: ${title}`, { x: 50, y: 660, size: 12, font: times });
  page.drawText(summary || "No summary.", { x: 50, y: 640, size: 12, font: times });
  const buf = await pdfDoc.save();
  return new Response(buf, { headers: { "Content-Type": "application/pdf" } });
}
