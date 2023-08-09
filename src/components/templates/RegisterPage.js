"use client";
import { useState } from "react";
import styles from "./Loginpage.module.css";
import Link from "next/link";
import Toast from "../elements/Toast";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    configPassword: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    if (form.password !== form.configPassword) {
      Toast("Passwords not match!", "error");
    }
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
      <button onClick={submit}>ورود</button>
      <p>
        آیا حساب دارید؟ <Link href="/login">ورود</Link>
      </p>
    </div>
  );
}

export default LoginPage;
