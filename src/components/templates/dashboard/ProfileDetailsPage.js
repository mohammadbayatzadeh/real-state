"use client";
import { categories } from "@/constants/categories";
import { icons } from "@/constants/icons";
import { e2p, sp } from "@/utils/functions";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck, BiSolidCity } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import { VscCalendar } from "react-icons/vsc";
import ItemList from "../../elements/ItemList";
import ShareButton from "../../elements/ShareButton";

function ProfileDetailsPage({ profile }) {
  const {
    title,
    location,
    createdAt,
    city,
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
    <div className="w-full flex flex-col sm:flex-row justify-between gap-10">
      <div className="w-full">
        <h1 className="text-3xl text-first font-semibold">{title}</h1>
        <div className="flex items-center gap-1 text-first">
          <BiSolidCity />
          {city}
        </div>
        <div className="flex items-center gap-1 text-first">
          <HiOutlineLocationMarker />
          {location}
        </div>
        <div className="flex items-center gap-1 text-first">
          <VscCalendar />
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </div>
        <h3 className="text-first border-b border-first mt-8 mb-2">توضیحات</h3>
        <p>{description}</p>
        <h3 className="text-first border-b border-first mt-8 mb-2">
          امکانات رفاهی
        </h3>
        <ItemList data={amenities} />
        <h3 className="text-first border-b border-first mt-8 mb-2">قوانین </h3>
        <ItemList data={rules} />
      </div>
      <div className="w-full sm:w-[300px] flex flex-col gap-2 justify-start ">
        <div className="flex w-full items-center justify-center border border-first gap-1 text-first flex-col text-center rounded-xl shadow p-5">
          <SiHomebridge className="size-10" />
          <p className="text-xl font-[400]"> املاک {realState}</p>
          <p className="flex itesm-center gap-1">
            <AiOutlinePhone /> {e2p(phone)}
          </p>
        </div>
        <ShareButton />
        <div className="flex w-full items-center justify-center border border-first gap-1 text-first flex-col text-center rounded-xl shadow p-5">
          <p className="flex items-center gap-1">
            {icons[category]}
            {categories.find((item) => item.route === category).title}
          </p>
          <p>{sp(price)}</p>
          <p className="flex items-center gap-1">
            <BiCalendarCheck />
            {new Date(contructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
