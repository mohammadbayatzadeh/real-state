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
    >
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
