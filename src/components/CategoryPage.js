import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllLibData } from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";

const CategoryPage = () => {
  const { categoryId } = useParams();
  console.log('categoryId: ', categoryId);
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData).items;
  console.log("file: AvailableItems - line 9 - allLibData", allLibData);

  const categoryNames = ["Books", "Magazines", "News Papers"];

  let categoryItems;
  if (allLibData) {
    categoryItems = allLibData.filter((item) => item.category === parseInt(categoryId));
    console.log(
      "file: AvailableItems.js - line 14 - availableItems",
      categoryItems
    );
  }

  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <>
      <div className="container movie-wrapper">
        <h1 className="my-4 text-center text-white">{categoryNames[categoryId - 1]}</h1>
        <div className="row justify-content-start">
          {categoryItems &&
            categoryItems.map((libItem, index) => (
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

export default CategoryPage;
