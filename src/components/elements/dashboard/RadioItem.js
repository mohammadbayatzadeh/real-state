//styles
import styles from "./RadioItem.module.css";

function RadioItem({ form, setForm, label, name }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <label htmlFor={name} className={styles.button}>
      {label}
      <input
        type="radio"
        name="category"
        value={name}
        id={name}
        checked={form.category === name}
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
