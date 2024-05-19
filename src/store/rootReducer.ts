import { combineReducers } from "redux";
import homeCarouselReducer from "../pages/HomeTemplate/_component/HomeCarousel/duck/reducer";
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/reducer";
import movieDetailsReducer from "../pages/HomeTemplate/DetailMovie/duck/reducer";
import QuanLyDatVeReducer from "../pages/CheckOutTemplate/CheckOut/duck/reducer";
import userReducer from "../pages/AuthenPage/duck/reducer";

const rootReducer = combineReducers({
  homeCarouselReducer,
  listMovieReducer,
  movieDetailsReducer,
  QuanLyDatVeReducer,
  userReducer,
});

export default rootReducer;
