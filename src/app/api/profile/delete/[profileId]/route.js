import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

//functions
import connectDB from "@/utils/connectDB";

//models
import Boss from "@/models/Boss";
import Profile from "@/models/Profile";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const id = context.params.profileId;

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

    const profile = await Profile.findOne({ _id: id });
    if (
      !existingBoss._id.equals(profile.userId) &&
      existingBoss.role !== "ADMIN"
    ) {
      return NextResponse.json(
        {
          error: "دسترسی شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    await profile.deleteOne({ _id: id });

    return NextResponse.json(
      {
        message: "آگهی با موفقیت حذف شد",
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
