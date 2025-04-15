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
        <h3 className="w-full bg-red-500 text-white font-[500] text-xl rounded-xl shadow-xl p-5">هیج موردی یافت نشده است</h3>
      )}
    </>
  );
}

export default ItemList;
