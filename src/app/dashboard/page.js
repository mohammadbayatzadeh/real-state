"use client";
import { useContext } from "react";

//contexts
import { UserContext } from "@/components/layout/dashboard/DashboardSideBar";

//tmeplates
import DashboardPage from "@/components/templates/dashboard/DashboardPage";

async function Dahboard() {
  const { user } = useContext(UserContext);
  return <DashboardPage date={user.createdAt} />;
}

export default Dahboard;
