//styles
import { useContext } from "react";
import styles from "./DashboardPage.module.css";
import { UserContext } from "@/components/layout/dashboard/DashboardSideBar";

function DashboardPage({ date }) {
  const { profiles } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.data}>
        <span className={styles.row}>
          <p>تاریخ عضویت:</p>
          <span>{new Date(date).toLocaleDateString("fa-IR")}</span>
        </span>
        <span>
          {profiles.length === 0 ? (
            <p>شما هنوز هیچ آگهی ای ثبت نگرده اید</p>
          ) : (
            <p>تعداد آگهی های شما : {profiles.length}</p>
          )}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
