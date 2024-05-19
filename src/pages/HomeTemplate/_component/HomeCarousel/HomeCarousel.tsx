import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { actFetchHomeCarousel } from "./duck/actions";

export default function HomeCarousel() {
  const dispatch: any = useDispatch();

  const { data } = useSelector((state: RootState) => state.homeCarouselReducer);

  useEffect(() => {
    dispatch(actFetchHomeCarousel());
  }, [dispatch]);

  const renderHomeCarousel = () => {
    if (data && data.length > 0) {
      return data.map((movie) => {
        return (
          <div key={movie.maPhim}>
            <div>
              <img
                src={movie.hinhAnh}
                alt={movie.hinhAnh}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        );
      });
    }
  };

  return (
    <Carousel effect="fade" autoplay={true} autoplaySpeed={3000} arrows={true}>
      {renderHomeCarousel()}
    </Carousel>
  );
}
