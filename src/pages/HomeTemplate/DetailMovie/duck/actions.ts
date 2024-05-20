
import { Action } from "../../../../store/type";
import api from "../../../../utils/apiUtils";
import * as ActionType from "./../duck/constants";


export const actFetchMovieDetails = (id: string) => {
  return (dispatch: any) => {
    dispatch(actMovieDetailRequest());

    api
    .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((response) => {
        dispatch(actMovieDetailSuccess(response.data.content));
      })
      .catch((error: any) => {
        dispatch(actMovieDetailFailed(error));
      });
  };
};

const actMovieDetailRequest = (): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_REQUEST,
  };
};

const actMovieDetailSuccess = (data: any): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_SUCCESS,
    payload: data,
  };
};

const actMovieDetailFailed = (error: any): Action => {
  return {
    type: ActionType.MOVIE_DETAIL_FAILED,
    payload: error,
  };
};

