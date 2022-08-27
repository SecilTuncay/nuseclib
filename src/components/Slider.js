import React, { useEffect } from "react";
import { Carousel, Nav } from "react-bootstrap";
import { getSliderData } from "../features/libitems/libitemsSlice";
import { fetchSliderData } from "../features/libitems/libitemsSlice";
import { useDispatch, useSelector } from "react-redux";

function Slider() {
  const dispatch = useDispatch();
  const sliderInfo = useSelector(getSliderData);

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

              return (
                <Carousel.Item key={productId} interval={1500}>
                  <Nav>
                    <Nav.Item>
                      <img className="d-block w-100 text-center" src={`../${src}`} alt="" />
                    </Nav.Item>
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
