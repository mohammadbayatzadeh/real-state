"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

//icons
import { VscSignIn, VscSignOut, VscSymbolProperty } from "react-icons/vsc";
import { IoDocumentsOutline } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";

//styles
import styles from "./Header.module.css";

function Header() {
  const { status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const signoutHandler = async () => {
    signOut({ redirect: false });
    router.replace("/");
  };
  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/residentials" className={styles.button}>
              <IoDocumentsOutline />
              <span>آگهی ها</span>
            </Link>
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
            {pathname !== "/auth/login" && (
              <Link href="/auth/login" className={styles.button}>
                <VscSignIn />
                <span>ورود</span>
              </Link>
            )}
            {pathname !== "/auth/register" && (
              <Link href="/auth/register" className={styles.button}>
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
