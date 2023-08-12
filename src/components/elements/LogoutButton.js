"use client";

import { signOut } from "next-auth/react";
import styles from "./LogoutButton.module.css";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className={styles.button}
      onClick={() => (signOut({ redirect: false }), router.replace("/"))}
    >
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
