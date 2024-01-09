//comps
import DashboardCard from "../../modules/dashboard/DashboardCard";

//styles
import styles from "./AllProfilesPage.module.css";

function AllProfilesPage({ profiles }) {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        {profiles.length ? (
          profiles.map((i) => (
            <DashboardCard
              key={i._id}
              data={JSON.parse(JSON.stringify(i))}
              type="admin"
            />
          ))
        ) : (
          <p>هیج آگهی وجود ندارد.</p>
        )}
      </div>
    </div>
  );
}

export default AllProfilesPage;
