"use client";
import { categories } from "@/constants/categories";
import { cities } from "@/constants/cities";
import { services } from "@/constants/services";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import CategoryCard from "../../modules/landing/CategoryCard";

function HomePage() {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex gap-5 w-full justify-center items-center flex-col">
        <h1 className="text-5xl font-bold text-center text-first">
          سامانه خرید و فروش ملک
        </h1>
        <ul className="flex gap-1 justify-center">
          {services.map((i, index) => (
            <li key={index}>
              <Button variant="solid" type="default">
                <p className="font-bold text-first">{i}</p>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-8 my-16">
        {categories.map(
          (item, index) =>
            index > 0 && (
              <CategoryCard key={index} name={item.route} title={item.title} />
            )
        )}
      </div>
      <h2 className="text-5xl font-bold text-center text-first">
        شهر های پربازدید
      </h2>

      <div className="flex justify-between gap-3 mt-8 flex-wrap">
        {cities.map((i, index) => (
          <Button
            key={index}
            onClick={() => router.push(`/residentials?city=${i.value}`)}
            className="w-[calc(20%-12px)]"
          >
            {i.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
