"use client";
import Link from "next/link";

//styles
import styles from "./DashboardSideBar.module.css";

//icons
import { VscAccount } from "react-icons/vsc";

//comps
import LogoutButton from "../elements/LogoutButton";

function DashboardSideBar({ children, session }) {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <VscAccount />
        <p className={styles.email}>{session?.user.email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles"> آگهی های من</Link>
        <Link href="/dashboard/add-profile">ثبت آگهی</Link>
        <LogoutButton />
      </aside>
      <main>{children}</main>
    </div>
  );
}

export default DashboardSideBar;
