"use client";

//styles
import styles from "./DashboardCard.module.css";

//components
import Card from "../elements/Card";

//icons
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

function DashboardCard({ data }) {
  const deleteHandler = () => {};
  const editHandler = () => {};
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
