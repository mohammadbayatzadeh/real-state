//comps
import DashboardCard from "../../modules/dashboard/DashboardCard";

//styles
import styles from "./AllProfilesPage.module.css";

function AllProfilesPage({ profiles }) {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        {profiles.length ? (
          profiles.map((item) => (
            <DashboardCard
              key={item._id}
              data={JSON.parse(JSON.stringify(item))}
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
