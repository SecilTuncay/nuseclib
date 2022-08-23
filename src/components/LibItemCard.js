import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { manageStock } from "../features/libitems/libitemsSlice";
import { useDispatch } from "react-redux";
//import errorImage from "../../images/image-error.png";
import { Card } from "react-bootstrap";
library.add(fas, far);

const LibItemCard = (props) => {
  const { itemData } = props;
  const { id, name, author, description, productImage, category, isInStock } =
    itemData;
  console.log("productImage: ", productImage);
  //const [isStock, setIsStock] = useState(props.isInStock);
  const dispatch = useDispatch();

  /* const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";
  let tempPath = poster_path
    ? `${baseImgUrl}/${size}${poster_path}`
    : errorImage; */

  const addToStockHandler = () => {
    dispatch(
      manageStock({
        id,
        isInStock,
      })
    );
  };

  return (
    <div className="col-lg-3 col-md-6 my-2 text-white">
      <Card className="libitem-card" key={id}>
        <Card.Header className="d-flex justify-content-end libitem-card__header">
          <span className="libitem-card__btns" onClick={addToStockHandler}>
            {isInStock ? (
              <div className="text-success">
                <span className="mr-2">Available</span>
                <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
              </div>
            ) : (
              <div className="text-danger">
                <span className="mr-2">Loaned</span>
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
              </div>
            )}
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
          <Card.Title className="libitem-card__title mb-2">{name}</Card.Title>
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
    </div>
  );
};

export default LibItemCard;
