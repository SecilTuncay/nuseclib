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
  console.log('productImage: ', productImage);
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
        <Card.Header className="d-flex justify-content-between libitem-card__header">
          <div className="libitem-card__badge">
            <span className="d-block text-center"> </span>
          </div>
          <div>
            <span
              className="libitem-card__btns text-info"
              onClick={addToStockHandler}
            >
              {isInStock ? (
                <div>
                  <span>kütüphanede </span>
                  <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
                </div>
              ) : (
                <div>
                  <span>kütüphanede değil </span>
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                </div>
              )}
            </span>
          </div>
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
