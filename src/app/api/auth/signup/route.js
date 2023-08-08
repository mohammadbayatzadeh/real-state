import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    console.log(body)
  } catch (err) {
    NextResponse.json({ error: "مشکلی در سرور رخ داده است." }, { status: 500 });
  }
}
