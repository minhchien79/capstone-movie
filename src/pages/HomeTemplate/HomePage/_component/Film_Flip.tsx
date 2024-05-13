import React from "react";
import { Movie } from "../duck/type";
import { Link } from "react-router-dom";


interface FilmProps {
  item: Movie;
}

const Film_Flip: React.FC<FilmProps> = ({ item }) => {
  const { hinhAnh, tenPhim, moTa, maPhim } = item;

  return (
    <div className="h-full m-2 bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        className="w-full h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hinhAnh})` }}
      >
        <img src={hinhAnh} alt={tenPhim} className="opacity-0 w-full h-full" />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">
        {tenPhim}
      </h1>
      <p className="leading-relaxed mb-3 h-16">
        {moTa.length > 100 ? (
          <span>{moTa.slice(0, 100)}...</span>
        ) : (
          <span>{moTa}</span>
        )}
      </p>
      <button className='bg-orange-300 text-white py-2 px-4 rounded-full cursor-pointer'>
       <Link to={`/detail/${maPhim}`}> ĐẶT VÉ</Link>
      </button>
    </div>
  );
};

export default Film_Flip;
