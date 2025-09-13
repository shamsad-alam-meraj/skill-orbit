import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany(); // Will fail if table doesn't exist yet
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Database not connected yet or table missing" },
      { status: 500 }
    );
  }
}
