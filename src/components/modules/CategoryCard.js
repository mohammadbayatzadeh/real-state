//styles
import Image from "next/image";
import styles from "./CategoryCard.module.css";
function CategoryCard({ name, title, link }) {
  return (
    <div className={styles.container}>
      <Image
        src={`/images/${name}.png`}
        alt={title}
        width={240}
        height={144}
        priority={true}
      />
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;
