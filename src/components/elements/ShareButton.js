"use client";
import { LuShare2 } from "react-icons/lu";
import useToast from "./Toast";

function ShareButton() {
  const { api, contextHolder } = useToast();

  return (
    <div
      className="flex items-center gap-1 p-5 border border-first text-center justify-center w-ull shadow rounded-xl text-first cursor-pointer hover:shadow-xl transition-all"
      onClick={() =>
        api.error("در حال حاضر امکان کپی کردن لینک آگهی موجود نیست")
      }
    >
      {contextHolder}
      <LuShare2 /> <p>اشتراک گذاری</p>
    </div>
  );
}

export default ShareButton;
