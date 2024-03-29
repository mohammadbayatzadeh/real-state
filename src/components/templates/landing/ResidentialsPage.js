import Link from "next/link";

//elements
import Card from "../../elements/Card";

//styles
import styles from "./ResidentialsPage.module.css";

//constants
import { categories } from "@/constants/categories";

function ResidentialsPage({ data }) {
  if (data.error) {
    return (
      <h3 className={styles.error}> مشکلی در دریافت اطلاعات پیش آمده است </h3>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <p>دسته بندی</p>
        <ul>
          {categories.map((item, index) => (
            <li key={index}>
              <Link href={`/residentials?category=${item.route}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.main}>
        {data.length > 0 ? (
          data.map((profile) => <Card key={profile._id} data={profile} />)
        ) : (
          <h3 className={styles.error}>هیچ آگهی ثبت نشده است</h3>
        )}
      </div>
    </div>
  );
}

export default ResidentialsPage;
