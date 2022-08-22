import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLibData } from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";

const AvailableItems = () => {
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData).items;
  console.log("file: AvailableItems - line 9 - allLibData", allLibData);
  let availableItems;
  if (allLibData) {
    availableItems = allLibData.filter((item) => item.isInStock);
    console.log(
      "file: AvailableItems.js - line 14 - availableItems",
      availableItems
    );
  }
  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <>
      <div className="container movie-wrapper">
        <h1 className="my-4 text-center text-white">Available Items</h1>
        <div className="row justify-content-center">
          {availableItems &&
            availableItems.map((libItem, index) => (
              <LibItemCard
                key={index}
                itemData={libItem}
                //isInStock={isInStock(libItem.id)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default AvailableItems;
