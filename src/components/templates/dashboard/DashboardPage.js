//styles
import ProfilesCounter from "@/components/elements/dashboard/ProfilesCounter";
import styles from "./DashboardPage.module.css";

function DashboardPage({ date }) {
  return (
    <div className={styles.container}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{new Date(date).toLocaleDateString("fa-IR")}</span>
      </div>
      <ProfilesCounter />
    </div>
  );
}

export default DashboardPage;
