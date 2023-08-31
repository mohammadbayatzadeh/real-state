"use client";

//styles
import styles from "./ProfileDetailsPage.module.css";

//icons
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

import { VscCalendar } from "react-icons/vsc";

//functions
import { e2p, sp } from "@/utils/functions";

//components
import ShareButton from "../elements/ShareButton";
import ItemList from "../elements/ItemList";
import { icons } from "@/constants/icons";

//constants
import { categories } from "@/constants/categories";

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
            {icons[category]}
            {categories.find((item) => item.route === category).title}
          </p>
          <p>{sp(price)}</p>
          <p>
            <BiCalendarCheck />
            {new Date(contructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
