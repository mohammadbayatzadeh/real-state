"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiArchiveRegister } from "react-icons/gi";
import { IoDocumentsOutline } from "react-icons/io5";
import { VscSignIn, VscSignOut, VscSymbolProperty } from "react-icons/vsc";

function Header() {
  const { status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const signoutHandler = async () => {
    signOut({ redirect: false });
    router.replace("/");
  };

  return (
    <header className="bg-first w-full h-14 flex items-center justify-between text-third rounded-xl p-4 mb-12">
      <div className="flex">
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link
              href="/residentials"
              className="flex gap-1 border-2 border-third  py-1 px-2 rounded-xl"
            >
              <IoDocumentsOutline className="size-5" />
              آگهی ها
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        {status === "loading" && <p>لطفا منتظر بمانید...</p>}
        {status === "authenticated" && (
          <div className="flex gap-1">
            {pathname !== "/dashboard" && (
              <Link
                href="/dashboard"
                className="flex gap-1 border-2 border-third  py-1 px-2 rounded-xl"
              >
                <VscSymbolProperty className="size-5" />
              </Link>
            )}
            <button
              onClick={signoutHandler}
              className="flex gap-1 border-2 border-third  py-1 px-2 rounded-xl"
            >
              <VscSignOut className="size-5" />
              <span>خروج</span>
            </button>
          </div>
        )}
        {status === "unauthenticated" && (
          <div className="flex gap-1">
            {pathname !== "/auth/login" && (
              <Link
                href="/auth/login"
                className="flex gap-1 border-2 border-third  py-1 px-2 rounded-xl"
              >
                <VscSignIn />
                <span>ورود</span>
              </Link>
            )}
            {pathname !== "/auth/register" && (
              <Link
                href="/auth/register"
                className="flex gap-1 border-2 border-third  py-1 px-2 rounded-xl"
              >
                <GiArchiveRegister />
                <span>ثبت نام</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
