import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLibData,
  getIsLoading,
} from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import LibItemCard from "./LibItemCard";
import Loading from "./Loading";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LibItemMainPage = (props) => {
  const dispatch = useDispatch();
  console.log('dispatch: ', dispatch);
  const allLibData = useSelector(getAllLibData);
  console.log("file: LibItemMainPage.js - line 14 - allLibData", allLibData);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <div className="container all-container">
      <h1 className="my-4 text-center text-white">All Library Items</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="row justify-content-start mb-3">
            {allLibData &&
              allLibData.map((libItem, index) => (
                <LibItemCard
                  key={index}
                  itemData={libItem}
                />
              ))}
            <div className="col-lg-3 col-md-6 my-2 text-white">
              <Card className="libitem-card addItemClass text-center" >
                <Card.Body>

                  <Link
                    className="libitem-card__link overflow-hidden"
                    to={`/addItem`}
                  >
                    <Card.Title className="addItemClass__title">Add new Item to library</Card.Title>
                    <FontAwesomeIcon className="text-success" icon="fa-solid fa-circle-plus" />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      )
      }
    </div >
  )
}

export default LibItemMainPage;