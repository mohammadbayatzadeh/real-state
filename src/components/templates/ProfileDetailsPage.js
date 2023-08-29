"use client";

//styles
import styles from "./ProfileDetailsPage.module.css";
//icons
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { VscCalendar } from "react-icons/vsc";

//functions
import { e2p, sp } from "@/utils/functions";

//components
import ShareButton from "../elements/ShareButton";
import ItemList from "../elements/ItemList";

function ProfileDetailsPage({ profile }) {
  const {
    title,
    location,
    createdAt,
    description,
    amenities,
    rules,
    realState,
    phone,
    category,
    price,
    contructionDate,
  } = profile;

  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <div className={styles.location}>
          <HiOutlineLocationMarker />
          {location}
        </div>
        <div className={styles.location}>
          <VscCalendar />
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </div>
        <h3 className={styles.title}>توضیحات</h3>
        <p>{description}</p>
        <h3 className={styles.title}>امکانات رفاهی</h3>
        <ItemList data={amenities} />
        <h3 className={styles.title}>قوانین </h3>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realstate}>
          <span>
            <SiHomebridge />
          </span>
          <p> املاک {realState}</p>
          <p>
            <AiOutlinePhone /> {e2p(phone)}
          </p>
        </div>
        <ShareButton />
        <div className={styles.category}>
          <p>
            {icons[category]} {categories[category]}
          </p>
          <p>{sp(price)}</p>
          <p>
            <BiCalendarCheck />{" "}
            {new Date(contructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
