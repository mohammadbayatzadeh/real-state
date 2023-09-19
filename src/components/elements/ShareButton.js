"use client";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

//styles
import styles from "./ShareButton.module.css";

//icons
import { LuShare2 } from "react-icons/lu";
import Toast from "./Toast";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div
        className={styles.container}
        onClick={() => Toast("لینک آگهی کپی شد", "success")}
      >
        <LuShare2 /> <p> اشتراک گذاری</p>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
