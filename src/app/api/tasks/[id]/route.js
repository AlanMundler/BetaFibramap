import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";
import next from "next";

export async function GET(request, { params }) {
  const servicio = await prisma.servicio.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(servicio);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const servicioUpdated = await prisma.servicio.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(servicioUpdated);
}

export async function DELETE(request, { params }) {
  try {
    const servicioRemoved = await prisma.servicio.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json("Eliminando tarea" + params.id + servicioRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
