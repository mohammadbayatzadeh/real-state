//elements
import RadioItem from "../../elements/dashboard/RadioItem";

//constants
import { categories } from "@/constants/categories";

//styles
import styles from "./RadioList.module.css";

function RadioList({ form, setForm }) {
  return (
    <div className={styles.container}>
      <p>دسته بندی:</p>
      <div className={styles.main}>
        {categories.slice(1).map((item, index) => (
          <RadioItem
            key={index}
            form={form}
            setForm={setForm}
            label={item.title}
            name={item.route}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioList;
