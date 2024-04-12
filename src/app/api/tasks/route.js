import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {
  const servicios = await prisma.servicio.findMany();
  return NextResponse.json(servicios);
}

export async function POST(request) {
  const {
    proveedor,
    plan,
    velocidad,
    velocidadSub,
    velocidadBaj,
    tecnologia,
    ip,
    instalacion,
    precioLista,
    precioDesc,
    atencionCl,
    descripcion,
  } = await request.json();
  const newServicio = await prisma.servicio.create({
    data: {
      proveedor,
      plan,
      velocidad,
      velocidadSub,
      velocidadBaj,
      tecnologia,
      ip,
      instalacion,
      precioLista,
      precioDesc,
      atencionCl,
      descripcion,
    },
  });
  return NextResponse.json(newServicio);
}
