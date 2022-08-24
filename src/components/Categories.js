import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryData } from "../features/libitems/libitemsSlice";
import { fetchCategoryData } from "../features/libitems/libitemsSlice";
import { Nav } from "react-bootstrap";

function Categories() {
  const dispatch = useDispatch();
  const categoriesInfo = useSelector(getCategoryData);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  return (
    <section className="mt-4">
      <div className="container d-flex flex-row justify-content-center ">
        <div className="categories--container d-flex flex-column justify-content-center text-white">
          <h4 className="text-center mb-4">Categories</h4>
          <div className="d-flex flex-row justify-content-center">
            {categoriesInfo &&
              categoriesInfo.map((category) => {
                const { id, name, description } = category;
                return (
                  <Nav.Link key={id} href={`/category/${id}`}>
                    <button
                      key={id}
                      type="button"
                      className="btn categories__btn"
                    >
                      {name}
                    </button>
                  </Nav.Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
