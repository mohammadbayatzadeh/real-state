import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(context) {
  try {
    await connectDB();
    const id = context.params.profileId;
    const profile = await Profile.findOne({ _id: id });
    return NextResponse.json(
      { message: "آگهی با موفقیت دریافت شد", data: { ...profile } },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    NextResponse.json(
      { error: "مشکلی در ارتباط با سرور پیش آمده است" },
      { status: 500 }
    );
  }
}
