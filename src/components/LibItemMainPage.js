import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLibData,
  getIsLoading,
} from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";
import Loading from "./Loading";

const LibItemMainPage = () => {
  const dispatch = useDispatch();
  console.log('dispatch: ', dispatch);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
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
        <div className="row justify-content-start mb-3">
          {allLibData &&
            allLibData.map((libItem, index) => (
              <LibItemCard
                key={index}
                itemData={libItem}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default LibItemMainPage;
