// api/example.js
import { NextResponse } from "next/server";

export function GET(request) {
  // Manejar solicitudes GET
  return NextResponse.json("funciona")
}
