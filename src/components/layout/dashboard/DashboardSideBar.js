"use client";
import Link from "next/link";
import { createContext } from "react";
import { VscAccount } from "react-icons/vsc";
import LogoutButton from "../../elements/general/LogoutButton";

export const UserContext = createContext();

function DashboardSideBar({ children, session, user, profiles }) {
  const { role } = user;
  const {
    user: { email },
  } = session;
  return (
    <div className="flex gap-3 w-full items-start">
      <aside className="flex flex-col rounded-xl shadow-xl border border-first gap-2 p-5 w-[250px]">
        <VscAccount className="size-10 text-first mx-auto" />
        {role === "ADMIN" && "ادمین"}
        <p className="text-center  font-[400] line-clamp-1">{email}</p>
        <Link
          href="/dashboard"
          className="w-full p-3 !text-white bg-first/90 rounded shadow mb-2 transition-all hover:bg-first hover:shadow-lg"
        >
          حساب کاربری
        </Link>
        <Link
          href="/dashboard/my-profiles"
          className="w-full p-3 !text-white bg-first/90 rounded shadow mb-2 transition-all hover:bg-first hover:shadow-lg"
        >
          {" "}
          آگهی های من
        </Link>
        <Link
          href="/dashboard/add-profile"
          className="w-full p-3 !text-white bg-first/90 rounded shadow mb-2 transition-all hover:bg-first hover:shadow-lg"
        >
          ثبت آگهی
        </Link>
        {role === "ADMIN" && (
          <>
            <Link href="/dashboard/notpublished">در انتظار تایید</Link>
            <Link href="/dashboard/allprofiles">همه آگهی ها </Link>
          </>
        )}
        <LogoutButton />
      </aside>
      <main>
        <UserContext.Provider value={{ session, user, profiles }}>
          {children}
        </UserContext.Provider>
      </main>
    </div>
  );
}

export default DashboardSideBar;
