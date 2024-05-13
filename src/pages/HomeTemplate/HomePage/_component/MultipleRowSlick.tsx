import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { actFetchListMovie } from "../duck/actions";
import { Carousel } from "antd";
import Film_Flip from "./Film_Flip";

const MultipleRows: React.FC = () => {
  const dispatch: any = useDispatch();
  const { loading, data } = useSelector(
    (state: RootState) => state.listMovieReducer
  );

  useEffect(() => {
    dispatch(actFetchListMovie());
  }, []);

  const renderFilm = () => {
    if (loading) return <div>Loading...</div>;
    if (data && data.length > 0) {
      return data.map((movie) => <Film_Flip item={movie} />);
    }
    return null;
  };

  return (
    <div>
      <p className="px-8 py-5 font-semibold rounded-full bg-gray-800 text-white">
        DANH SÁCH PHIM
      </p>

      <Carousel
        className=".slick-arrow slick-prev::before"
        autoplay
        autoplaySpeed={3000}
        slidesToShow={3}
        arrows
        rows={2}
        dots={false}
      >
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
      </Carousel>
    </div>
  );
};

export default MultipleRows;
