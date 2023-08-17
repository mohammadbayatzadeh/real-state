"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

function AddProfilePage({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    contructionDate: new Date(),
    category: "apartment",
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    data && setProfileData(data);
  }, []);

  const editHandler = async () => {
    setLoading(true);
    axios
      .patch("/api/profile", { _id: data._id, ...profileData })
      .then(
        (res) => (
          Toast(res.data.message, "success"), router.replace("/dashboard")
        )
      )
      .catch((err) => Toast(err.response.data.error, "error"))
      .finally(() => setLoading(false));
  };

  const submitHandler = async () => {
    setLoading(true);
    axios
      .post("/api/profile", { ...profileData })
      .then(
        (res) => Toast(res.data.message, "success"),
        router.push("/dashboard")
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
      <TextInput
        title={"موقعیت مکانی"}
        name={"location"}
        profileData={profileData}
        setProfileData={setProfileData}
        textArea={true}
      />
      <TextInput
        title={" بنگاه"}
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
