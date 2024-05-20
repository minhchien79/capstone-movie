import { Action, AppState } from "../../../../../store/type";
import * as ActionType from "./constants";
import { Movie } from "./types";

const initialState: AppState<Movie> = {
  loading: false,
  data: null,
  error: null,
};

const homeCarouselReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.HOME_CAROUSEL_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.HOME_CAROUSEL_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.HOME_CAROUSEL_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default homeCarouselReducer;
