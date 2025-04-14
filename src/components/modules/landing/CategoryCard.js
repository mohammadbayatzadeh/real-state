import Image from "next/image";
import Link from "next/link";

function CategoryCard({ name, title }) {
  return (
    <Link
      className="w-full rounded-xl shadow-xl flex flex-col items-center justify-center p-2 hover:bg-second transition-all"
      href={{ pathname: "residentials", query: { category: name } }}
    >
      <Image
        src={`/images/${name}.png`}
        alt={title}
        width={240}
        height={144}
        priority={true}
        className="w-full rounded-xl"
      />
      <p className="text-first  pt-2">{title}</p>
    </Link>
  );
}

export default CategoryCard;
