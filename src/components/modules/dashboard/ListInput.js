//styles
import styles from "./ListInput.module.css";

//icons
import { VscAdd } from "react-icons/vsc";

function ListInput({ type, title, form, setForm }) {
  const addhandler = () => {
    setForm({ ...form, [type]: [...form[type], ""] });
  };

  const deleteHandler = (index) => {
    const list = [...form[type]];
    list.splice(index, 1);
    setForm({ ...form, [type]: list });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...form[type]];
    list[index] = value;
    setForm({ ...form, [type]: list });
  };

  return (
    <div className={styles.container}>
      <p>{title}:</p>
      {form[type].map((i, index) => (
        <div className={styles.item} key={index}>
          <input value={i} onChange={(e) => changeHandler(e, index)} />
          <button onClick={() => deleteHandler(index)}>حذف</button>
        </div>
      ))}
      <button className={styles.button} onClick={addhandler}>
        <VscAdd /> افزودن
      </button>
    </div>
  );
}

export default ListInput;
