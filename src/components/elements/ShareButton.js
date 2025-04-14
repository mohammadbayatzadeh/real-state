"use client";
import { useEffect, useState } from "react";

//styles
import styles from "./ShareButton.module.css";

//icons
import { LuShare2 } from "react-icons/lu";

//elements
import Toast from "./Toast";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div
      className={styles.container}
      onClick={() => Toast("لینک آگهی کپی شد", "success")}
    >
      <LuShare2 /> <p> اشتراک گذاری</p>
    </div>
  );
}

export default ShareButton;
