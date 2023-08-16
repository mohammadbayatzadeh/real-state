import { NextResponse } from "next/server";

//models
import Boss from "@/models/Boss";

//functions
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات را کامل وارد کنید" },
        { status: 422 }
      );
    }

    const existingBoss = await Boss.findOne({ email });
    
    if (existingBoss) {
      return NextResponse.json(
        { error: "این کاربر قبلا ثبت نام کرده است" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newBoss = await Boss.create({ email, password: hashedPassword });

    return NextResponse.json(
      { message: "ثبت نام با موفقیت انجام شد", data: newBoss },
      { status: 200 }
    );
  } catch (err) {
    NextResponse.json({ error: "مشکلی در سرور رخ داده است." }, { status: 500 });
  }
}
