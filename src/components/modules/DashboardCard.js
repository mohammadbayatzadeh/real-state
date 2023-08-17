"use client";
import { useRouter } from "next/navigation";

//styles
import styles from "./DashboardCard.module.css";

//components
import Card from "../elements/Card";

//icons
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

function DashboardCard({ data }) {
  const router = useRouter();
  const deleteHandler = () => {};
  const editHandler = () => {
    router.push(`my-profiles/${data._id}`);
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.buttons}>
        <button onClick={editHandler}>
          <FiEdit /> ویرایش
        </button>
        <button onClick={deleteHandler} className={styles.delete}>
          <AiOutlineDelete />
          حذف
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
