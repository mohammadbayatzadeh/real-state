//styles
import styles from "./My-ProfilesPage.module.css";

//comps
import DashboardCard from "../../modules/DashboardCard";
function MyProfilesPage({ profiles }) {
  return (
    <div className={styles.container}>
      {profiles.length ? (
        profiles.map((i) => (
          <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
        ))
      ) : (
        <p>هیج آگهی ثبت نشده است.</p>
      )}
    </div>
  );
}

export default MyProfilesPage;
