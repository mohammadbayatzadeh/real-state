import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

//functions
import connectDB from "@/utils/connectDB";

//models
import Profile from "@/models/Profile";
import Boss from "@/models/Boss";

export async function PATCH(req, context) {
  const body = await req.json();
  const { published } = body;
  try {
    await connectDB();
    const id = context.params.profileID;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "شما احراز هویت نشده اید" },
        { error: 401 }
      );
    }

    const existingBoss = await Boss.findOne({ email: session.user.email });
    if (!existingBoss) {
      return NextResponse.json(
        { error: "حساب کابری شما یافت نشد" },
        { error: 404 }
      );
    }

    if (existingBoss.role !== "ADMIN") {
      return NextResponse.json(
        {
          error: "دسترسی شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }
    const profile = await Profile.findOne({ _id: id });
    profile.published = published;
    await profile.save();

    if (published) {
      return NextResponse.json(
        {
          message: "آگهی با موفقیت منتشر شد",
        },
        {
          status: 200,
        }
      );
    }
    return NextResponse.json(
      {
        message: "آگهی با موفقیت پنهان شد",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: "مشکلی در ارنباط در سرور بوجود آمده است",
      },
      { status: 500 }
    );
  }
}
