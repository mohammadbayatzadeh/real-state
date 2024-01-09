import Link from "next/link";
import Image from "next/image";

//styles
import styles from "./CategoryCard.module.css";

function CategoryCard({ name, title }) {
  return (
    <Link
      className={styles.container}
      href={{ pathname: "residentials", query: { category: name } }}
    >
      <Image
        src={`/images/${name}.png`}
        alt={title}
        width={240}
        height={144}
        priority={true}
      />
      <p>{title}</p>
    </Link>
  );
}

export default CategoryCard;
