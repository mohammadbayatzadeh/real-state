import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import connectDB from "@/utils/connectDB";
//functions

//models
import Boss from "@/models/Boss";
import Profile from "@/models/Profile";

export async function GET() {
  try {
    await connectDB();
    const profiles = await Profile.find().select("-userId");
    return NextResponse.json(
      {
        data: profiles,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "مشکلی در ارنباط در سرور بوجود آمده است",
      },
      { status: 500 }
    );
  }
}

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
    } = body;

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
      userId: new Types.ObjectId(existingBoss._id),
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

export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      _id,
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

    const existingBoss = await Boss.findOne({ email: session.user.email });
    if (!existingBoss) {
      return NextResponse.json(
        { error: "حساب کابری شما یافت نشد" },
        { error: 404 }
      );
    }

    if (
      !_id ||
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

    const profile = await Profile.findOne({ _id });
    if (!existingBoss._id.equals(profile.userId)) {
      return NextResponse.json(
        {
          error: "دسترسی شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.contructionDate = contructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    await profile.save();

    return NextResponse.json(
      {
        message: "آگهی با موفقیت ویرایش شد",
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
