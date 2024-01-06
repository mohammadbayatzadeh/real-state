import React from "react";
import styles from "./RadioItem.module.css";

function RadioItem({ profileData, setProfileData, label, name, category }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <label htmlFor="villa" className={styles.button}>
      ویلا
      <input
        type="radio"
        name="category"
        value="villa"
        id="villa"
        checked={category === "villa"}
        onChange={changeHandler}
      />
      <div className={styles.mark}>
        <span></span>
        <span></span>
      </div>
    </label>
  );
}

export default RadioItem;
