import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { actFetchHomeCarousel } from "./duck/actions";

const contentStyle: React.CSSProperties = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const dispatch: any = useDispatch();

  const { loading, data } = useSelector(
    (state: RootState) => state.homeCarouselReducer
  );

  useEffect(() => {
    dispatch(actFetchHomeCarousel());
  }, []);

  const renderHomeCarousel = () => {
    if (loading) return <div>Loading...</div>;
    if (data && data.length > 0) {
      return data.map((movie) => {
        return (
          <div key={movie.maPhim}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${movie.hinhAnh})`,
              }}
            >
              {/* <img src={movie.hinhAnh} alt={movie.hinhAnh} className="w-full opacity-0" /> */}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <Carousel effect="fade" autoplay={true} autoplaySpeed={3000}>
      {renderHomeCarousel()}
    </Carousel>
  );
}
