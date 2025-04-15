"use client";
import { useEffect, useState } from "react";
import { LuShare2 } from "react-icons/lu";
import useToast from "./Toast";

function ShareButton() {
  const [url, setUrl] = useState("");
  const { api, contextHolder } = useToast();

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div
      className="flex items-center gap-1 p-5 border border-first text-center justify-center w-ull shadow rounded-xl text-first"
      onClick={() => api.success("لینک آگهی کپی شد")}
    >
      {contextHolder}
      <LuShare2 /> <p> اشتراک گذاری</p>
    </div>
  );
}

export default ShareButton;
