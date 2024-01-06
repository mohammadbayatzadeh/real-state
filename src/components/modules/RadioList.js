//styles
import RadioItem from "../elements/RadioItem";
import styles from "./RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  return (
    <div className={styles.container}>
      <p>دسته بندی:</p>
      <div className={styles.main}>
        <RadioItem
          profileData={profileData}
          setProfileData={setProfileData}
          label="ویلا"
          name="villa"
          category={category}
        />
        <RadioItem
          profileData={profileData}
          setProfileData={setProfileData}
          label="آپارتمان"
          name="apartment"
          category={category}
        />
        <RadioItem
          profileData={profileData}
          setProfileData={setProfileData}
          label="مغازه"
          name="store"
          category={category}
        />
        <RadioItem
          profileData={profileData}
          setProfileData={setProfileData}
          label="دفتر"
          name="office"
          category={category}
        />
      </div>
    </div>
  );
}

export default RadioList;
