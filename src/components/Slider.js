import React, { useEffect } from "react";
import { Carousel, Nav } from "react-bootstrap";
import { getAllLibData } from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";
import { useDispatch, useSelector } from "react-redux";
import error from "../images/page-error.png";

function Slider() {
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData);
  console.log('allLibData: ', allLibData);
  const sliderInfo = allLibData.sliders;



  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);

  return (
    <section>
      <div className="container">
        <Carousel prevLabel="" nextLabel="" indicators={false}>
          {sliderInfo &&
            sliderInfo.map((slider) => {

              const { productId, src } = slider;
              console.log('src: ', src);
              return (
                <Carousel.Item key={productId} interval={1500}>
                  <Nav>
                    <Nav.Link href={`/products/${productId}`}>
                      <img className="d-block w-100" src={src} alt="" />
                    </Nav.Link>
                  </Nav>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </div>
    </section>
  );
}

export default Slider;
