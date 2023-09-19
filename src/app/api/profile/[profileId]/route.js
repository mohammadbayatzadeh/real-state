// import { NextResponse } from "next/server";

// //models
// import Profile from "@/models/Profile";

// //functions
// import connectDB from "@/utils/connectDB";

// export async function GET(req, context) {
//   try {
//     await connectDB();
//     const id = context.params.profileId;
//     const profile = await Profile.findOne({ _id: id }).lean();
//     return NextResponse.json(
//       { message: "آگهی با موفقیت دریافت شد", data: { ...profile } },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.log(err);
//     NextResponse.json(
//       { error: "مشکلی در ارتباط با سرور پیش آمده است" },
//       { status: 500 }
//     );
//   }
// }
