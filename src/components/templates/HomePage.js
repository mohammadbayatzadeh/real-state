import Link from "next/link";

//styles
import styles from "./HomePage.module.css";

//components
import CategoryCard from "../modules/CategoryCard";

//constants
import { cities } from "@/constants/cities";
import { services } from "@/constants/services";
import { categories } from "@/constants/categories";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>سامانه خرید و فروش ملک</h1>
        <ul>
          {services.map((i, index) => (
            <li key={index}>
              <span></span>
              <Link href="/">{i}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.category}>
        {categories.map(
          (item, index) =>
            index > 0 && (
              <CategoryCard key={index} name={item.route} title={item.title} />
            )
        )}
      </div>
      <h2>شهر های پربازدید</h2>

      <div className={styles.cities}>
        {cities.map((i, index) => (
          <Link key={index} href={`/residentials?city=${i.value}`}>
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
