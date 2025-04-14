import { categories } from "@/constants/categories";
import Link from "next/link";
import Card from "../../elements/Card";

function ResidentialsPage({ data }) {
  if (data.error) {
    return (
      <h3 className="bg-red-500 p-3 rounded shadow-xl text-third font-[500] h-fit w-full">
        مشکلی در دریافت اطلاعات پیش آمده است
      </h3>
    );
  }

  return (
    <aside className="w-full flex gap-2">
      <div className="flex flex-col gap-1 w-72 shadow-2xl rounded-xl p-5 border border-third">
        <p className="text-first text-2xl font-[500]">دسته بندی</p>
        <ul>
          {categories.map((item, index) => (
            <li
              key={index}
              className="w-full bg-first/90 rounded shadow mb-2 transition-all text-third hover:bg-first hover:shadow-lg"
            >
              <Link
                href={`/residentials?category=${item.route}`}
                className="w-full p-2 grow flex"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-between flex-wrap gap-2">
        {data.length > 0 ? (
          data.map((profile) => <Card key={profile._id} data={profile} />)
        ) : (
          <h3 className="bg-red-500 p-3 rounded shadow-xl text-third font-[500] h-fit w-full">
            هیچ آگهی ثبت نشده است
          </h3>
        )}
      </div>
    </aside>
  );
}

export default ResidentialsPage;
