//templates
import DashboardCard from "../../modules/dashboard/DashboardCard";

//styles
import styles from "./NotPublishedPage.module.css";

function NotPublishedPage({ profiles }) {
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
          <p>هیج آگهی در انتظاری نیست.</p>
        )}
      </div>
    </div>
  );
}

export default NotPublishedPage;
