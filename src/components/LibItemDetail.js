import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";
import { Card } from "react-bootstrap";
import PageNotFound from "./PageNotFound";
import {
  getIsLoading,
} from "../features/libitems/libitemsSlice";
import { getSelectedLibItem, fetchAsyncLibItem } from "../features/libitems/libitemsSlice";


const LibItemDetail = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const libItemData = useSelector(getSelectedLibItem);
  const { id, name, author, description, productImage, category, isInStock } =
    libItemData;

  const categoryNames = ["Books", "Magazines", "Newspapers"];
  const url = "http://localhost:3000";

  useEffect(() => {
    dispatch(fetchAsyncLibItem(itemId));
  }, []);

  const isLoading = useSelector(getIsLoading);



  return (
    <div
      className="position-relative detail-background"
      style={{
        backgroundImage: `url(${productImage})`,
        backgroundSize: "contain",
      }}
    >
      <div className="opacity-layer w-100 h-100 py-3 d-flex align-items-center">
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="row">
              <Card className="libitem-detail mx-auto">
                <div className="row no-gutters">
                  <div className="col-sm-5 py-4 text-center">
                    <Card.Img
                      className="libitem-detail__image"
                      src={productImage}
                    ></Card.Img>
                  </div>
                  <div className="col-sm-7 pr-5">
                    <Card.Body className="mt-5">
                      <div className="libitem-detail__name mt-3">{name}</div>
                      <div className="libitem-detail__author mt-1">
                        {author}
                      </div>
                      <div className="libitem-detail__category mt-1">
                        {categoryNames[category - 1]}
                      </div>

                      <div className="libitem-detail__summary mt-4">
                        <span className="mb-2">Description : </span>
                        <div>{description}</div>
                      </div>
                      <div className="mt-4">
                        <span
                          className="libitem-detail__btns mr-2 text-white"

                        >
                          Situation :
                          {isInStock ? (
                            <div className="text-success mt-2">
                              <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
                              <span className="ml-2">Available</span>
                            </div>
                          ) : (
                            <div className="text-warning mt-2">
                              <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                              <span className="ml-2">Loaned</span>
                            </div>
                          )}
                        </span>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibItemDetail;
