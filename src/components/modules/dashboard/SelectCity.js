import React, { useState } from "react";
import styles from "./SelectCity.module.css";
import Select from "react-select";
//constants
import { cities } from "@/constants/cities";

function SelectCity({ form, setForm }) {
  const [change, setChange] = useState(false);

  return (
    <div className={styles.container}>
      <p>شهر کنونی : {form.city}</p>
      {!change && (
        <p className={styles.change} onClick={() => setChange(true)}>
          برای تغییر کلیک کنید
        </p>
      )}
      {change && (
        <>
          <p>شهر جدید: </p>
          <Select
            value={form.city}
            onChange={(value) => {
              setForm({ ...form, city: value.value });
              setChange(false);
            }}
            options={cities}
            className={styles.select}
          />
        </>
      )}
    </div>
  );
}

export default SelectCity;
