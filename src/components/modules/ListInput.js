//styles
import styles from "./ListInput.module.css";

//icons
import { VscAdd } from "react-icons/vsc";

function ListInput({ type, title, profileData, setProfileData }) {
  const addhandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i, index) => (
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
