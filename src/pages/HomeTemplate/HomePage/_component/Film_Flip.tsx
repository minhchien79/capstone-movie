import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../duck/type";
import "./style.css";

interface FilmProps {
  item: Movie;
}

const Film_Flip: React.FC<FilmProps> = ({ item }) => {
  const { hinhAnh, tenPhim, maPhim, danhGia } = item;

  return (
    <div className="Card_card__wrapper__RUTBs">
      <div className="Card_card__uVcCy">
        <div className="Card_card__header__Nq4zg">
          <div className="Card_card__hover__jJf4Q hidden xl:block">
            <div className="card__hover__content flex flex-col justify-center items-center w-full h-full gap-3">
              <NavLink
                to={`/detail/${maPhim}`}
                type="button"
                className="text-white bg-[#f26b38] w-[120px] h-[40px] hover:bg-[#fb9440] rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440]"
              >
                <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
                Mua vé
              </NavLink>
              <button
                type="button"
                className="text-white w-[120px] h-[40px] border border-white hover:bg-[#fb9440]/80 hover:border-transparent rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440]"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-play"
                  className="svg-inline--fa fa-circle-play mr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                  />
                </svg>
                Trailer
              </button>
            </div>
          </div>
          <img
            alt={tenPhim}
            loading="lazy"
            decoding="async"
            data-nimg={1}
            className="img__film object-cover duration-500 ease-in-out group-hover:opacity-100 h-full w-full"
            src={hinhAnh}
            style={{ color: "transparent", width: 365, height:522 }}
          />
          <div className="votes">
            <p className="absolute right-[5px] bottom-10">
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="star"
                  className="svg-inline--fa fa-star text-yellow-300 mr-5 text-[12px]"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
              </span>
              <span className="text-[18px] font-bold text-white">
                {danhGia}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="Card_card__title__kFoFc">
        <h3>{tenPhim}</h3>
      </div>
    </div>
  );
};

export default Film_Flip;
