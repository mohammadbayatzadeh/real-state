"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

//icons
import { VscSignIn, VscSignOut, VscSymbolProperty } from "react-icons/vsc";
import { GiArchiveRegister } from "react-icons/gi";

//styles
import styles from "./Header.module.css";

function Header() {
  const { status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const signoutHandler = async () => {
    signOut({ redirect: false });
    router.push("/");
  };
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/residentials">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        {status === "loading" && <p>لطفا منتظر بمانید...</p>}
        {status === "authenticated" && (
          <>
            {pathname !== "/dashboard" && (
              <Link href="/dashboard" className={styles.button}>
                <VscSymbolProperty />
              </Link>
            )}
            <button onClick={signoutHandler} className={styles.button}>
              <VscSignOut />
              <span>خروج</span>
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            {pathname !== "/login" && (
              <Link href="/login" className={styles.button}>
                <VscSignIn />
                <span>ورود</span>
              </Link>
            )}
            {pathname !== "/register" && (
              <Link href="/register" className={styles.button}>
                <GiArchiveRegister />
                <span>ثبت نام</span>
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
