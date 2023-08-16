import Boss from "@/models/Boss";
import Boss from "@/models/Boss";
import Profile from "@/models/Profile";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      contructionDate,
      category,
      rules,
      amenities,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "شما احراز هویت نشده اید" },
        { error: 401 }
      );
    }

    const Boss = await Boss.findOne({ email: session.user.email });
    console.log(Boss);
    if (!Boss) {
      return NextResponse.json(
        { error: "حساب کابری شما یافت نشد" },
        { error: 404 }
      );
    }
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !contructionDate ||
      !category
    ) {
      return NextResponse.json(
        {
          error: " لطفا اطلاعات را کامل وارد کنید",
        },
        { status: 404 }
      );
    }

    const newProfile = await Profile.create({
      ...body,
      price: +price,
      userId: new Types.ObjectId(Boss._id),
    });
    return NextResponse.json(
      { message: "آگهی جدید ثبت شد", data: newProfile },
      { status: 201 }
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
