import { Action } from "../../../../../store/type";
import api from "../../../../../utils/apiUtils";
import * as ActionType from "./../duck/constants";
import { Movie } from "./types";

export const actFetchHomeCarousel = () => {
  return (dispatch: any) => {
    dispatch(actHomeCarouselRequest());

    api
      .get(`/QuanLyPhim/LayDanhSachBanner`)
      .then((response) => {
        dispatch(actHomeCarouselsuccess(response.data.content));
      })
      .catch((error: any) => {
        dispatch(actHomeCarouselFailed(error));
      });
  };
};

const actHomeCarouselRequest = (): Action => {
  return {
    type: ActionType.HOME_CAROUSEL_REQUEST,
  };
};

const actHomeCarouselsuccess = (data: Movie[]): Action => {
  return {
    type: ActionType.HOME_CAROUSEL_SUCCESS,
    payload: data,
  };
};

const actHomeCarouselFailed = (error: any): Action => {
  return {
    type: ActionType.HOME_CAROUSEL_FAILED,
    payload: error,
  };
};
