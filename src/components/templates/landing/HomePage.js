import { categories } from "@/constants/categories";
import { cities } from "@/constants/cities";
import { services } from "@/constants/services";
import { Button } from "antd";
import Link from "next/link";
import CategoryCard from "../../modules/landing/CategoryCard";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className="flex gap-5 w-full justify-center items-center flex-col">
        <h1 className="text-5xl font-bold text-center text-first">
          سامانه خرید و فروش ملک
        </h1>
        <ul className="flex gap-1 justify-center">
          {services.map((i, index) => (
            <li key={index}>
              <Button variant="solid" type="default">
                <p className="font-bold text-first">{i}</p>
              </Button>
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
