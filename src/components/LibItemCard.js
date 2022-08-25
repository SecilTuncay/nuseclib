import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { deleteItem, updateItem } from "../features/libitems/libitemsSlice";
import { useDispatch } from "react-redux";
//import errorImage from "../../images/image-error.png";
import { Card } from "react-bootstrap";
library.add(fas, far);

const LibItemCard = (props) => {
  const { itemData } = props;
  const { id, name, author, description, productImage, category, isInStock } =
    itemData;

  const dispatch = useDispatch();
  const categoryNames = ["Books", "Magazines", "Newspapers"];

  const updateItemHandler = () => {
    dispatch(updateItem({ id, name, author, description, productImage, category, isInStock: !isInStock }));
  };

  return (
    <div className="col-lg-3 col-md-6 my-2 text-white">
      <Card className="libitem-card" key={id}>
        <Card.Header className="d-flex justify-content-between libitem-card__header">
          <span className="libitem-card__btns" onClick={e => updateItemHandler()}>
            {isInStock ? (
              <div className="text-success">
                <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
                <span className="mx-2">Available</span>
              </div>
            ) : (
              <div className="text-warning">
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                <span className="mx-2">Loaned</span>
              </div>
            )}
          </span>
          <span className="libitem-card__btns" onClick={e => dispatch(deleteItem(id))}>

            <div className="text-danger">
              <span className="mx-2">Delete</span>
              <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
            </div>

          </span>
        </Card.Header>
        <Link
          className="libitem-card__link overflow-hidden"
          to={`/libitem/${id}`}
        >
          <Card.Img
            className="libitem-card__image"
            src={`../${productImage}`}
          ></Card.Img>
        </Link>
        <Card.Body>
          <Card.Title className="libitem-card__title">{name}</Card.Title>
          <Card.Text className="libitem-card__category mb-3">
            {categoryNames[category - 1]}
          </Card.Text>
          <Card.Text className="libitem-card__overview mb-2">
            {description}
          </Card.Text>

          <div className="libitem-card__more d-flex justify-content-end align-items-center">
            <Link
              className="libitem-card__link d-flex justify-content-end align-items-center"
              to={`/libitem/${id}`}
            >
              more{" "}
              <span className="pl-1 text-info">
                <FontAwesomeIcon icon="fa-solid fa-forward" />
              </span>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div >
  );
};

export default LibItemCard;
