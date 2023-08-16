"use client";

//styles

import styles from "./My-ProfilesPage.module.css";
function MyProfilesPage({ profiles }) {
  console.log("first");
  console.log(profiles);
  return <div className={styles.container}>MyProfilesPage</div>;
}

export default MyProfilesPage;
