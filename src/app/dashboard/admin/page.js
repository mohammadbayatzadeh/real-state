import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Boss from "@/models/Boss";
import connectDB from "@/utils/connectDB";
import { connect } from "mongoose";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function Admin() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  const user = await Boss.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") redirect("/dashboard");
  return <div>Admin</div>;
}

export default Admin;
