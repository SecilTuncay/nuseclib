import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLibData,
  getIsLoading,
} from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";
import Loading from "./Loading";

const AvailableItems = () => {
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData);
  const isLoading = useSelector(getIsLoading);

  let availableItems;
  if (allLibData) {
    availableItems = allLibData.filter((item) => item.isInStock);
  }
  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <>
      <div className="container movie-wrapper">
        <h1 className="my-4 text-center text-white">Available Items</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row justify-content-start mb-3">
            {availableItems &&
              availableItems.map((libItem, index) => (
                <LibItemCard
                  key={index}
                  itemData={libItem}
                  //isInStock={isInStock(libItem.id)}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AvailableItems;
