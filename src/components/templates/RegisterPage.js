"use client";
import { useState } from "react";
import styles from "./Loginpage.module.css";
import Link from "next/link";
import Toast from "../elements/Toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

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
        setLoading(false);
        Toast(res.data.message, "success");
        router.push("/login");
      })
      .catch((err) => {
        setLoading(false);
        Toast(err.response.data.error, "error");
      });
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
      {loading ? (
        <ThreeDots
          height="55"
          width="80"
          radius="9"
          color="#465293"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin: " 0 auto" }}
          visible={loading}
        />
      ) : (
        <button onClick={submit}>ورود</button>
      )}
      <p>
        آیا حساب دارید؟ <Link href="/login">ورود</Link>
      </p>
    </div>
  );
}

export default LoginPage;
