//functions
import { p2e } from "@/utils/functions";

//styles
import styles from "./TextInput.module.css";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textArea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className={styles.input}>
      <p>{title}:</p>
      {textArea ? (
        <textarea
          name={name}
          value={profileData[name]}
          onChange={(e) => changeHandler(e)}
          type="text"
        />
      ) : (
        <input
          name={name}
          value={profileData[name]}
          onChange={(e) => changeHandler(e)}
          type="text"
        />
      )}
    </div>
  );
}

export default TextInput;
