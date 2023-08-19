//styles
import Link from "next/link";
import styles from "./HomePage.module.css";
import CategoryCard from "../modules/CategoryCard";

function HomePage() {
  const services = ["رهن", "اجاره", "خرید", "فروش"];
  const cities = [
    "تهران",
    "شیراز",
    "اصفهان",
    "رشت",
    "اهواز",
    "یزد",
    "کرج",
    "مشهد",
    "خرم آباد",
    "قزوین",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h3>سامانه خرید و فروش ملک</h3>
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
        <CategoryCard name="villa" title="منزل ویلایی" />
        <CategoryCard name="apartment" title="منزل آپارتمانی" />
        <CategoryCard name="office" title="دفتر کار " />
        <CategoryCard name="store" title="مغازه" />
      </div>
      <div className={styles.cities}>
        {cities.map((i, index) => (
          <span key={index}>{i}</span>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
