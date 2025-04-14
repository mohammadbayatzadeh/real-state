"use client";

import TextInput from "@/components/elements/general/TextInput";
import { checkFill } from "@/utils/functions";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../../elements/general/Loading";
import useToast from "../../elements/Toast";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { api, contextHolder } = useToast();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!checkFill(form)) {
      return api.error("لطفا تمام اطلاعات را وارد کنید");
    }
    setLoading(true);
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      api.error(res.error);
    } else {
      api.success("ورود موفقیت آمیز بود");
      router.push("/dashboard");
    }
  };

  return (
    <form
      className="flex flex-col gap-2 items-center shadow-xl rounded-xl p-5 border border-first"
      onSubmit={submitHandler}
    >
      {contextHolder}
      <h3>فرم ورود</h3>
      <TextInput form={form} setForm={setForm} name="email" label="ایمیل" />
      <TextInput
        form={form}
        setForm={setForm}
        name="password"
        label="رمز عبور"
      />
      {loading ? (
        <Loading />
      ) : (
        <Button type="primary" className="w-full" onClick={submitHandler}>
          ورود
        </Button>
      )}
      <p>
        آیا حساب ندارید؟ <Link href="/auth/register">ثبت نام</Link>
      </p>
    </form>
  );
}

export default LoginPage;
