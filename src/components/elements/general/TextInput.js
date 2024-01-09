//functions
import { p2e } from "@/utils/functions";

//styles
import styles from "./TextInput.module.css";

function TextInput({ label, name, form, setForm, textArea = false }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: p2e(value) });
  };
  return (
    <div className={styles.input}>
      <label>{label}:</label>
      {textArea ? (
        <textarea
          name={name}
          value={form[name]}
          onChange={changeHandler}
          type="text"
        />
      ) : (
        <input
          name={name}
          value={form[name]}
          onChange={changeHandler}
          type={name.includes("password") ? "password" : "text"}
        />
      )}
    </div>
  );
}

export default TextInput;
