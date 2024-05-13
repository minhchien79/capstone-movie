import { combineReducers } from "redux";
import homeCarouselReducer from "../pages/HomeTemplate/_component/HomeCarousel/duck/reducer";
import listMovieReducer from "../pages/HomeTemplate/HomePage/duck/reducer";
import movieDetailsReducer from "../pages/HomeTemplate/DetailMovie/duck/reducer";

const rootReducer = combineReducers({
  homeCarouselReducer,
  listMovieReducer,
  movieDetailsReducer,
});

export default rootReducer;
