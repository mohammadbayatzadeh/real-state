"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

//components
import Toast from "../../elements/Toast";
import Loading from "../../elements/Loading";

//styles
import styles from "./AuthPage.module.css";

function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    configPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    if (form.password !== form.configPassword) {
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
        router.push("/login");
      })
      .catch((err) => {
        Toast(err.response.data.error, "error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.form}>
      <h3>فرم ثبت نام</h3>
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
      <label>تایید رمز عبور:</label>
      <input
        value={form.configPassword}
        name="configPassword"
        type="password"
        onChange={(e) => changeHandler(e)}
      />
      {loading ? <Loading /> : <button onClick={submit}>ثبت نام </button>}
      <p>
        آیا حساب دارید؟ <Link href="/login">ورود</Link>
      </p>
    </div>
  );
}

export default LoginPage;
