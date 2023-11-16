import DashboardCard from "../../modules/DashboardCard";
import styles from "./NotPublishedPage.module.css";

function NotPublishedPage({ profiles }) {
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
          <p>هیج آگهی در انتظاری نیست.</p>
        )}
      </div>
    </div>
  );
}

export default NotPublishedPage;
