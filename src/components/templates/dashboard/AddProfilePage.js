"use client";
import React, { useState, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

//elements
import TextInput from "../../elements/general/TextInput";
import RadioList from "../../modules/dashboard/RadioList";
import ListInput from "../../modules/dashboard/ListInput";
import CustumDatePicker from "../../elements/CustumDatePicker";
import Toast from "../../elements/Toast";
import Loading from "../../elements/general/Loading";
import SelectCity from "@/components/modules/dashboard/SelectCity";

//styles
import styles from "./AddProfilePage.module.css";

function AddProfilePage({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    city: "تهران",
    location: "",
    phone: "",
    price: 0,
    realState: "",
    contructionDate: new Date(),
    category: "apartment",
    rules: [],
    amenities: [],
  });

  useLayoutEffect(() => {
    data && setForm(data);
  }, []);

  const editHandler = async () => {
    setLoading(true);
    axios
      .patch("/api/profile", { _id: data._id, ...form })
      .then(
        (res) => (Toast(res.data.message, "success"), router.push("/dashboard"))
      )
      .catch((err) => Toast(err.response.data.error, "error"))
      .finally(() => setLoading(false));
  };

  const submitHandler = async () => {
    setLoading(true);
    axios
      .post("/api/profile", { ...form })
      .then(
        (res) => (Toast(res.data.message, "success"), router.push("/dashboard"))
      )
      .catch((err) => Toast(err.response.data.error, "error"))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <div className={styles.form}>
        <TextInput
          label={"عنوان"}
          name={"title"}
          form={form}
          setForm={setForm}
        />

        <TextInput
          label={"توضیحات"}
          name={"description"}
          form={form}
          setForm={setForm}
          textArea={true}
        />
        <SelectCity form={form} setForm={setForm} />

        <TextInput
          label={"موقعیت مکانی"}
          name={"location"}
          form={form}
          setForm={setForm}
          textArea={true}
        />
        <TextInput
          label={"بنگاه"}
          name={"realState"}
          form={form}
          setForm={setForm}
        />
        <TextInput
          label={"قیمت"}
          name={"price"}
          form={form}
          setForm={setForm}
        />
        <TextInput
          label={"شماره تلفن"}
          name={"phone"}
          form={form}
          setForm={setForm}
        />
        <RadioList form={form} setForm={setForm} />

        <ListInput
          type="amenities"
          title="امکانات رفاهی"
          form={form}
          setForm={setForm}
        />
        <ListInput type="rules" title="قوانین" form={form} setForm={setForm} />
        <CustumDatePicker form={form} setForm={setForm} />
        {loading ? (
          <Loading />
        ) : (
          <button
            className={styles.button}
            onClick={data ? editHandler : submitHandler}
          >
            {data ? "ویرایش آگهی" : "ثبت آگهی"}
          </button>
        )}
      </div>
    </div>
  );
}

export default AddProfilePage;
