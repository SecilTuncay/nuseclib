import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";
import { Card } from "react-bootstrap";
import PageNotFound from "./PageNotFound";
import {
  getSelectedLibItem,
  removeSelectedItem,
  getIsLoading,
} from "../features/libitems/libitemsSlice";
import { manageStock, getAllLibData } from "../features/libitems/libitemsSlice";
import {
  fetchAsyncLibItem,
  fetchAllLibData,
} from "../features/libitems/libitemsSlice";
import {} from "../features/libitems/libitemsSlice";

const LibItemDetail = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData).items;

  const selectedItem = allLibData.filter((item) => item.id == itemId);
  const { id, name, author, description, productImage, category, isInStock } =
    selectedItem[0];
  const url = "http://localhost:3000";

  useEffect(() => {
    dispatch(fetchAllLibData());
  }, [dispatch, isInStock]);

  const isLoading = useSelector(getIsLoading);
  console.log("isLoading: ", isLoading);

  /*  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";
  const backgroundSize = "w1280";
  let tempMoviePath = poster_path
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
    <div
      className="position-relative detail-background"
      style={{
        backgroundImage: `url(${productImage})`,
        backgroundSize: "contain",
      }}
    >
      <div className="opacity-layer w-100 h-100 py-3">
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="row">
              <Card className="libitem-detail mx-auto mt-4">
                <div className="row no-gutters">
                  <div className="col-sm-5 py-4 text-center">
                    <Card.Img
                      className="libitem-detail__image"
                      src={url + `${productImage}`}
                    ></Card.Img>
                  </div>
                  <div className="col-sm-7">
                    <Card.Body>
                      <div className="libitem-detail__name mt-3">{name}</div>
                      <div className="libitem-detail__author mt-1">
                        {author}
                      </div>

                      <div className="libitem-detail__summary mt-4">
                        <span className="mb-2">Description : </span>
                        <div>{description}</div>
                      </div>
                      <div className="mt-4">
                        <span
                          className="libitem-detail__btns mr-2 text-white"
                          onClick={addToStockHandler}
                        >
                          Situation :
                          {isInStock ? (
                            <div className="text-success mt-2">
                              <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
                              <span className="ml-2">Available</span>
                            </div>
                          ) : (
                            <div className="text-danger mt-2">
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
/*
        >
        <div className="position-absolute opacity-layer w-100 h-100"></div>
        <div className="container mr-auto">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="row pt-4">
              <Card className="libitem-detail">
                <div className="row no-gutters">
                  <div className="col-sm-5 p-4">
                    <div className="text-center">
                      <Card.Img
                        className="libitem-detail__image"
                        src={tempMoviePath}
                      ></Card.Img>
                      <div className="p-3 d-flex justify-content-center">
                        <a
                          className="libitem-detail__imdb"
                          href={`https://www.imdb.com/title/${imdb_id}`}
                          target="_blank"
                        >
                          <img
                            className="img img-fluid mr-2"
                            src={imdb}
                            alt="IMDB Page of Movie"
                          />
                        </a>
                        {videoID && (
                          <div
                            className="libitem-detail__trailer"
                            onClick={handleShow}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-video" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <Card.Body>
                      <h1 className="mt-3">
                        {title}
                        {""}

                        <span>
                          ({release_date && release_date.split("-")[0]})
                        </span>
                      </h1>
                      <div className="d-flex mt-3 align-items-center">
                        {genres &&
                          genres.map((genre) => {
                            return (
                              <div
                                className="libitem-detail__genre mr-2"
                                key={genre.id}
                              >
                                {genre.name}
                              </div>
                            );
                          })}
                        <span
                          className="libitem-detail__btns mr-2"
                          onClick={addToFavoritesHandler}
                        >
                          {isFavorite ? (
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                          ) : (
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                          )}
                        </span>
                        <span
                          className="libitem-detail__btns"
                          onClick={addToWatchlistHandler}
                        >
                          {isWatchList ? (
                            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                          ) : (
                            <FontAwesomeIcon icon="fa-regular fa-bookmark" />
                          )}
                        </span>
                      </div>

                      <h2 className="mt-4">{tagline}</h2>
                      <div className="libitem-detail__summary mt-4">
                        <span className="mb-2">Özet : </span>
                        <div>{overview}</div>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
      <div className="container mr-auto mt-4">
        <div className="cast-detail__header mb-2">Cast</div>
        <div className="row">
          <div className="cast-detail">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="row mb-4">
                {credits.cast &&
                  credits.cast.slice(0, 12).map((credit, id) => {
                    return (
                      <div
                        className="cast-detail__container text-center col-lg-2 col-md-4 my-2"
                        key={id}
                      >
                        <img className="cast-detail__image img img-fluid mb-2"></img>
                        <div className="cast-detail__actor">
                          <div className="cast-detail__name">{credit.name}</div>
                          <div className="cast-detail__role ">
                            {credit.character}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>*/
