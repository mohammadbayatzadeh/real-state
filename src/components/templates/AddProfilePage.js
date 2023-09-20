"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Select from "react-select";

//compoents
import TextInput from "../modules/TextInput";
import RadioList from "../modules/RadioList";
import ListInput from "../modules/ListInput";
import CustumDatePicker from "../elements/CustumDatePicker";
import Toast from "../elements/Toast";
import Loading from "../elements/Loading";

//styles
import styles from "./AddProfilePage.module.css";
import { useRouter } from "next/navigation";
import { cities } from "@/constants/cities";

function AddProfilePage({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [profileData, setProfileData] = useState({
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
    data && setProfileData(data);
  }, []);

  const editHandler = async () => {
    setLoading(true);
    axios
      .patch("/api/profile", { _id: data._id, ...profileData })
      .then(
        (res) => (Toast(res.data.message, "success"), router.push("/dashboard"))
      )
      .catch((err) => Toast(err.response.data.error, "error"))
      .finally(() => setLoading(false));
  };

  const submitHandler = async () => {
    setLoading(true);
    axios
      .post("/api/profile", { ...profileData })
      .then(
        (res) => (Toast(res.data.message, "success"), router.push("/dashboard"))
      )
      .catch((err) => Toast(err.response.data.error, "error"))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title={"عنوان"}
        name={"title"}
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title={"توضیحات"}
        name={"description"}
        profileData={profileData}
        setProfileData={setProfileData}
        textArea={true}
      />
      <p>شهر کنونی : {profileData.city}</p>
      {!change && (
        <p className={styles.change} onClick={() => setChange(true)}>
          برای تغییر کلیک کنید
        </p>
      )}
      {change && (
        <>
          <p>شهر جدید: </p>
          <Select
            value={profileData.city}
            onChange={(value) => {
              setProfileData({ ...profileData, city: value.value });
              setChange(false);
            }}
            options={cities}
            className={styles.select}
          />
        </>
      )}
      <TextInput
        title={"موقعیت مکانی"}
        name={"location"}
        profileData={profileData}
        setProfileData={setProfileData}
        textArea={true}
      />
      <TextInput
        title={"بنگاه"}
        name={"realState"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"قیمت"}
        name={"price"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"شماره تلفن"}
        name={"phone"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />

      <ListInput
        type="amenities"
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <ListInput
        type="rules"
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <CustumDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
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
  );
}

export default AddProfilePage;
