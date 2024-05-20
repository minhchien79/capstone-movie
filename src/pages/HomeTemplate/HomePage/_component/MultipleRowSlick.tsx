// eslint-disable-next-line
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { actFetchListMovie } from "../duck/actions";
import { NavLink } from "react-router-dom";
import Film_Flip from "./Film_Flip";
import Loading from "../../_component/Loading";

const MultipleRows: React.FC = () => {
  const dispatch: any = useDispatch();
  const { loading, data } = useSelector(
    (state: RootState) => state.listMovieReducer
  );

  useEffect(() => {
    dispatch(actFetchListMovie());
    // eslint-disable-next-line
  }, []);

  const renderFilm = () => {
    if (loading)
      return (
        <div>
          <Loading />
        </div>
      );
    if (data && data.length > 0) {
      // eslint-disable-next-line
      return data.map((movie) => <Film_Flip key={movie.maPhim} item={movie} />);
    }
    return null;
  };

  return (
    <div className="pb-12 pt-6 my-0 mx-auto screen1390:max-w-screen-xl xl:max-w-screen-screen1200  md:px-4 sm:px-[45px] px-[16px]">
      <div>
        <div className="flex  w-full md:justify-start justify-between gap-5 items-center mb-10">
          <div className="flex">
            <div className="hidden md:block">
              <span className="border-l-4 border-solid border-[#034ea2] mr-2" />
              <h1 className="mr-10 text-xl font-bold not-italic uppercase inline">
                Phim
              </h1>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-3 md:mr-8 text-[#333333] last:mr-0 flex-auto text-center hover:text-[#034EA2] transition-all duration-300 ease-in-out cursor-pointer relative">
                    <NavLink
                      to=""
                      className="md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal hover:text-blue-10 transition-all duration-300  ease-in-out cursor-pointer relative text-blue-10 tab__active opacity-100"
                      data-toggle="tab"
                      role="tablist"
                    >
                      Danh Sách Phim Hay
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
        {renderFilm()}
      </div>
    </div>
  );
};

export default MultipleRows;
