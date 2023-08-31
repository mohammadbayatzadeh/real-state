import Link from "next/link";

//styles
import styles from "./Card.module.css";

//icons
import { icons } from "@/constants/icons";
import { BiLeftArrow } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

//functions
import { sp } from "@/utils/functions";

function Card({ data: { _id, category, title, price, location } }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <div className={styles.title}> {title}</div>
      <div className={styles.location}>
        <HiLocationMarker /> {location}
      </div>
      <div className={styles.price}> {sp(price)} تومان</div>
      <Link href={`/residentials/${_id}`} className={styles.row}>
        مشاهده آگهی <BiLeftArrow />
      </Link>
    </div>
  );
}

export default Card;
