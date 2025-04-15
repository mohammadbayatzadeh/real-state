import { icons } from "@/constants/icons";
import { sp } from "@/utils/functions";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";

function Card({ data: { _id, category, title, city, price, location } }) {
  return (
    <Link
      href={`/residentials/${_id}`}
      className="grow flex flex-col items-start justify-between p-5 h-1/2 rounded-xl shadow border border-first transition-all hover:shadow-2xl"
    >
      <div className="w-full flex items-center gap-1 text-white font-[500]  bg-first rounded p-2 ">
        <span className="text-2xl">{icons[category]} </span>
        <p className="translate-y-0.5 line-clamp-1">{title}</p>
      </div>
      <div className="flex items-center gap-1 text-first font-[400]">
        <HiLocationMarker />
        {city}, {location}
      </div>
      <div className="flex items-center gap-1 text-first font-[400]">
        {sp(price)} تومان
      </div>
    </Link>
  );
}

export default Card;
