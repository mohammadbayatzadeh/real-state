import Link from "next/link";
import Card from "../elements/Card";
import styles from "./ResidentialsPage.module.css";

function ResidentialsPage({ data }) {
  const categories = ["همه", "ویلایی", "آپارتمان", "مغازه", "دفتر"];
  if (data.error)
    return (
      <h3 className={styles.error}> مشکلی در دریافت اطلاعات پیش آمده است </h3>
    );

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <p>دسته بندی</p>
        <ul>
          {categories.map((item, index) => (
            <li key={index}>
              <Link href='/'>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.main}>
        {data.data.length ? (
          data.data.map((profile) => <Card key={profile._id} data={profile} />)
        ) : (
          <h3 className={styles.error}>هیچ آگهی ثبت نشده است</h3>
        )}
      </div>
    </div>
  );
}

export default ResidentialsPage;
