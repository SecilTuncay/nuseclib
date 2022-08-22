import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLibData } from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";

function LibItemMainPage() {
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData).items;
  console.log("file: LibItemMainPage.js - line 9 - allLibData", allLibData);

  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center text-white">All Library Items</h1>

      <div className="row">
        {allLibData &&
          allLibData.map((libItem, index) => (
            <LibItemCard
              key={index}
              itemData={libItem}
              //isInStock={isInStock(libItem.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default LibItemMainPage;
