"use client";

import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

//elements
import Toast from "../../elements/Toast";
import Loading from "../../elements/general/Loading";
import TextInput from "@/components/elements/general/TextInput";

//styles
import styles from "./AuthPage.module.css";

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
    if (form.password !== form.confirm_password) {
      return Toast("پسورد ها مطابقت ندارند!", "error");
    }
    setLoading(true);
    await axios
      .post("/api/auth/signup", {
        email: form.email,
        password: form.password,
      })
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
    <form className={styles.form} onSubmit={submitHandler}>
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
        آیا حساب دارید؟ <Link href="/login">ورود</Link>
      </p>
    </form>
  );
}

export default LoginPage;
