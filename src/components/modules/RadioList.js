import styles from "./RadioList.module.css";
function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <p>دسته بندی:</p>
      <div className={styles.main}>
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
        <label htmlFor="apartment" className={styles.button}>
          آپارتمان
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
          <div className={styles.mark}>
            <span></span>
            <span></span>
          </div>
        </label>

        <label htmlFor="store" className={styles.button}>
          مغازه
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
          <div className={styles.mark}>
            <span></span>
            <span></span>
          </div>
        </label>

        <label htmlFor="office" className={styles.button}>
          دفتر
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
          <div className={styles.mark}>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>
    </div>
  );
}

export default RadioList;
