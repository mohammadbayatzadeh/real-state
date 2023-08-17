//styles
import styles from "./Card.module.css";

//icons
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore, BiLeftArrow } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { sp } from "@/utils/functions";
import Link from "next/link";

function Card({ data: { category, title, price, location } }) {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <div className={styles.title}> {title}</div>
      <div className={styles.location}>
        <HiLocationMarker /> {location}
      </div>
      <div className={styles.price}> {sp(price)} تومان</div>
      <Link href="/" className={styles.row}>
        مشاهده آگهی <BiLeftArrow />
      </Link>
    </div>
  );
}

export default Card;
