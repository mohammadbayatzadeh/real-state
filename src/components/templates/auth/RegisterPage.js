"use client";

import TextInput from "@/components/elements/general/TextInput";
import { checkFill } from "@/utils/functions";
import { Button } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { default as useToast } from "../../elements/Toast";
import Loading from "../../elements/general/Loading";

function LoginPage() {
  const router = useRouter();
  const { api, contextHolder } = useToast();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!checkFill(form)) {
      return api.error("لطفا تمام اطلاعات را وارد کنید");
    }
    if (form.password !== form.confirm_password) {
      return api.error("پسورد ها مطابقت ندارند!");
    }
    setLoading(true);
    await axios
      .post("/api/auth/signup", form)
      .then((res) => {
        api.success(res.data.message);
        router.push("/auth/login");
      })
      .catch((err) => {
        api.error(err.response.data.error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-2 items-center shadow-xl rounded-xl p-5 border border-first"
    >
      {contextHolder}
      <h3>فرم ثبت نام</h3>
      <TextInput form={form} setForm={setForm} name="email" label="ایمیل" />
      <TextInput
        form={form}
        setForm={setForm}
        name="password"
        label="رمز عبور"
      />
      <TextInput
        form={form}
        setForm={setForm}
        name="confirm_password"
        label="تایید رمزعبور"
      />

      {loading ? (
        <Loading />
      ) : (
        <Button type="primary" className="w-full" onClick={submitHandler}>
          ثبت نام{" "}
        </Button>
      )}
      <p>
        آیا حساب دارید؟ <Link href="/auth/login">ورود</Link>
      </p>
    </form>
  );
}

export default LoginPage;
