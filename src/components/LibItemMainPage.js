import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLibData,
  getIsLoading,
} from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";
import Loading from "./Loading";

function LibItemMainPage() {
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData);
  console.log("file: LibItemMainPage.js - line 14 - allLibData", allLibData);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center text-white">All Library Items</h1>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}

export default LibItemMainPage;
