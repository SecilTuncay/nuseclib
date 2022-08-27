import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllLibData,
  getIsLoading,
} from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";
import Loading from "./Loading";

const CategoryPage = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData);
  const isLoading = useSelector(getIsLoading);

  const categoryNames = ["Books", "Magazines", "Newspapers"];
  let categoryItems;
  if (allLibData) {
    categoryItems = allLibData.filter(
      (item) => item.category === parseInt(categoryId)
    );
  }

  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <>
      <div className="container all-container">
        <h1 className="my-4 text-center text-white">
          {categoryNames[categoryId - 1]}
        </h1>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="row justify-content-start mb-3">
            {categoryItems &&
              categoryItems.map((libItem, index) => (
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

export default CategoryPage;
