import React, { useEffect } from "react";
import { Carousel, Nav } from "react-bootstrap";
import { getSliderData } from "../features/libitems/libitemsSlice";
import { fetchSliderData } from "../features/libitems/libitemsSlice";
import { useDispatch, useSelector } from "react-redux";

function Slider() {
  const dispatch = useDispatch();
  const sliderInfo = useSelector(getSliderData);
  console.log("file: Slider.js - line 11 - sliderInfo", sliderInfo);

  useEffect(() => {
    dispatch(fetchSliderData());
  }, []);

  return (
    <section>
      <div className="container">
        <Carousel prevLabel="" nextLabel="" indicators={false}>
          {sliderInfo &&
            sliderInfo.map((slider) => {
              const { productId, src } = slider;
              console.log("src: ", src);
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
