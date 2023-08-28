//styles
import styles from "./ItemList.module.css";

function ItemList({ data }) {
  return (
    <>
      {data.length ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <h3 className={styles.error}>هیج موردی یافت نشده است</h3>
      )}
    </>
  );
}

export default ItemList;
