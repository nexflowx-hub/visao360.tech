import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, whatsapp, email, data } = body;

    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: "Nome e WhatsApp são obrigatórios." },
        { status: 400 }
      );
    }

    // In production, this would save to database via Prisma
    // and/or send to a CRM/email service
    console.log("Lead captured:", { name, whatsapp, email, data });

    return NextResponse.json(
      { success: true, message: "Lead capturado com sucesso." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}