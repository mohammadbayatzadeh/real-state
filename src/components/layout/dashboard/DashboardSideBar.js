"use client";
import { createContext } from "react";
import Link from "next/link";

//styles
import styles from "./DashboardSideBar.module.css";

//icons
import { VscAccount } from "react-icons/vsc";

//comps
import LogoutButton from "../../elements/general/LogoutButton";

export const UserContext = createContext();
function DashboardSideBar({ children, session, user, profiles }) {
  const { role } = user;
  const {
    user: { email },
  } = session;
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <VscAccount />
        {role === "ADMIN" && "ادمین"}
        <p className={styles.email}>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles"> آگهی های من</Link>
        <Link href="/dashboard/add-profile">ثبت آگهی</Link>
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
