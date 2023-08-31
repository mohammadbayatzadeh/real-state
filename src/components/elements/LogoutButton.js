"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

//icons
import { FiLogOut } from "react-icons/fi";

//styles
import styles from "./LogoutButton.module.css";

function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className={styles.button}
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
