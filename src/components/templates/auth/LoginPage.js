"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

//functions
import { signIn } from "next-auth/react";

//components
import Toast from "../../elements/Toast";
import Loading from "../../elements/Loading";

//styles
import styles from "./AuthPage.module.css";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
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
    <div className={styles.form}>
      <h3>فرم ورود</h3>
      <label>ایمیل:</label>
      <input
        value={form.email}
        name="email"
        type="text"
        onChange={(e) => changeHandler(e)}
      />
      <label>رمز عبور:</label>
      <input
        value={form.password}
        name="password"
        type="password"
        onChange={(e) => changeHandler(e)}
      />
      {loading ? <Loading /> : <button onClick={submit}>ورود</button>}
      <p>
        آیا حساب ندارید؟ <Link href="/register">ثبت نام</Link>
      </p>
    </div>
  );
}

export default LoginPage;
