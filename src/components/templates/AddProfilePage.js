"use client";
import React, { useState } from "react";
import TextInput from "../modules/TextInput";
import styles from "./AddProfilePage.module.css";
import { VscGlobe } from "react-icons/vsc";
import RadioList from "../modules/RadioList";
function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    contructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler = () => {
    console.log(profileData);
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ثبت آگهی</h3>
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

      <button className={styles.button} onClick={submitHandler}>
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfilePage;
