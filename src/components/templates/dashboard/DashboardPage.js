//styles
import { UserContext } from "@/components/layout/dashboard/DashboardSideBar";
import { useContext } from "react";

function DashboardPage({ date }) {
  const { profiles } = useContext(UserContext);
  return (
    <div>
      <h3 className="text-2xl mb-5 font-[400]">سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className="flex flex-col gap-2 p-3 rounded-xl shadow-xl bg-first text-white w-fit my-5">
        <span className="flex items-center gap-1">
          <p>تاریخ عضویت:</p>
          <span>{new Date(date).toLocaleDateString("fa-IR")}</span>
        </span>
        <span>
          {profiles.length === 0 ? (
            <p>شما هنوز هیچ آگهی ای ثبت نگرده اید</p>
          ) : (
            <p>تعداد آگهی های شما : {profiles.length}</p>
          )}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
