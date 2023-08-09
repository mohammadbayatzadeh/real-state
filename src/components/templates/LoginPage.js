"use client";
import { useState } from "react";
import styles from "./Loginpage.module.css";
import Link from "next/link";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {};
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
      <button onClick={submit}>ورود</button>
      <p>
        آیا حساب ندارید؟ <Link href="/register">ثبت نام</Link>
      </p>
    </div>
  );
}

export default LoginPage;
