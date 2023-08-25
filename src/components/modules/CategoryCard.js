//styles
import Image from "next/image";
import styles from "./CategoryCard.module.css";
import Link from "next/link";
function CategoryCard({ name, title, link }) {
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
