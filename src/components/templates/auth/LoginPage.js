"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

//functions
import { signIn } from "next-auth/react";

//elements
import Toast from "../../elements/Toast";
import Loading from "../../elements/Loading";
import TextInput from "@/components/modules/TextInput";

//styles
import styles from "./AuthPage.module.css";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
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
      router.push("/");
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h3>فرم ورود</h3>
      <TextInput form={form} setForm={setForm} name="email" label="ایمیل" />
      <TextInput
        form={form}
        setForm={setForm}
        name="password"
        label="رمز عبور"
      />
      {loading ? <Loading /> : <button type="submit">ورود</button>}
      <p>
        آیا حساب ندارید؟ <Link href="/register">ثبت نام</Link>
      </p>
    </form>
  );
}

export default LoginPage;
