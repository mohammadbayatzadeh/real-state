"use client";

import TextInput from "@/components/elements/general/TextInput";
import { checkFill } from "@/utils/functions";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Toast from "../../elements/Toast";
import Loading from "../../elements/general/Loading";

function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!checkFill(form)) {
      return Toast("لطفا تمام اطلاعات را وارد کنید", "error");
    }
    if (form.password !== form.confirm_password) {
      return Toast("پسورد ها مطابقت ندارند!", "error");
    }
    setLoading(true);
    await axios
      .post("/api/auth/signup", form)
      .then((res) => {
        Toast(res.data.message, "success");
        router.push("/auth/login");
      })
      .catch((err) => {
        Toast(err.response.data.error, "error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={submitHandler}>
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

      {loading ? <Loading /> : <button type="submit">ثبت نام </button>}
      <p>
        آیا حساب دارید؟ <Link href="/ auth/login">ورود</Link>
      </p>
    </form>
  );
}

export default LoginPage;
