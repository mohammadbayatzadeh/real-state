"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut({ redirect: false });
        router.push("/");
      }}
      className="w-full p-3 flex items-center gap-2 !text-white bg-first/90 rounded shadow mb-2 transition-all hover:bg-first hover:shadow-lg"
    >
      <FiLogOut className="size-5" />
      خروج
    </button>
  );
}

export default LogoutButton;
