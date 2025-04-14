"use client";

import TextInput from "@/components/elements/general/TextInput";
import { checkFill } from "@/utils/functions";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Toast from "../../elements/Toast";
import Loading from "../../elements/general/Loading";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!checkFill(form)) {
      return Toast("لطفا تمام اطلاعات را وارد کنید", "error");
    }
    setLoading(true);
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      Toast(res.error, "error");
    } else {
      [Toast("ورود موفقیت آمیز بود", "success")];
      router.push("/dashboard");
    }
  };

  return (
    <form
      className="flex flex-col gap-2 items-center shadow-xl rounded-xl p-5 border border-first"
      onSubmit={submitHandler}
    >
      <h3>فرم ورود</h3>
      <TextInput form={form} setForm={setForm} name="email" label="ایمیل" />
      <TextInput
        form={form}
        setForm={setForm}
        name="password"
        label="رمز عبور"
      />
      {loading ? <Loading /> : <Button type="primary" className="w-full" onClick={submitHandler}>ورود</Button>}
      <p>
        آیا حساب ندارید؟ <Link href="/auth/register">ثبت نام</Link>
      </p>
    </form>
  );
}

export default LoginPage;
