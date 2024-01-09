//styles
import RadioItem from "../../elements/dashboard/RadioItem";

//styles
import styles from "./RadioList.module.css";

function RadioList({ form, setForm }) {
  const { category } = form;

  return (
    <div className={styles.container}>
      <p>دسته بندی:</p>
      <div className={styles.main}>
        <RadioItem
          form={form}
          setForm={setForm}
          label="ویلا"
          name="villa"
          category={category}
        />
        <RadioItem
          form={form}
          setForm={setForm}
          label="آپارتمان"
          name="apartment"
          category={category}
        />
        <RadioItem
          form={form}
          setForm={setForm}
          label="مغازه"
          name="store"
          category={category}
        />
        <RadioItem
          form={form}
          setForm={setForm}
          label="دفتر"
          name="office"
          category={category}
        />
      </div>
    </div>
  );
}

export default RadioList;
