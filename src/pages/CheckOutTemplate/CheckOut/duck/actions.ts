import { Action } from "../../../../store/type";
import api from "../../../../utils/apiUtils";
import * as ActionType from "./../duck/constants";
import { ThongTinDatVe } from "./types";

export const actFetchMovieBooking = (maLichChieu: any) => {
  return (dispatch: any) => {
    dispatch(actMovieBookingRequest());

    api
      .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((response) => {
        dispatch(actMovieBookingSuccess(response.data.content));
      })
      .catch((error: any) => {
        dispatch(actMovieBookingFailed(error));
      });
  };
};

const actMovieBookingRequest = (): Action => {
  return {
    type: ActionType.MOVIE_BOOKING_REQUEST,
  };
};

const actMovieBookingSuccess = (data: any): Action => {
  return {
    type: ActionType.MOVIE_BOOKING_SUCCESS,
    payload: data,
  };
};

const actMovieBookingFailed = (error: any): Action => {
  return {
    type: ActionType.MOVIE_BOOKING_FAILED,
    payload: error,
  };
};

export const actBookTicket = (ghe: any): Action => {
  return {
    type: ActionType.DAT_VE,
    payload: ghe,
  };
};

export const actConfirmBooking = (thongTinDatVe: ThongTinDatVe) => {
  return (dispatch: any) => {
    api
      .post(`/QuanLyDatVe/DatVe`, thongTinDatVe)
      .then((response) => {
        // Dispatch action indicating booking success
        dispatch(actConfirmBookingSuccess(response.data.content));

        // Fetch updated booking information
        dispatch(actFetchMovieBooking(thongTinDatVe.maLichChieu))
          .then(() => {
            // Dispatch success action again after fetching updated info
            dispatch(actConfirmBookingSuccess(response.data.content));
          })
          .catch((error: any) => {
            // Handle fetch error if needed
            console.error("Error fetching updated booking information:", error);
          });
      })
      .catch((error: any) => {
        dispatch(actConfirmBookingFailed(error));
      });
  };
};

const actConfirmBookingSuccess = (data: any): Action => {
  return {
    type: ActionType.CONFIRM_BOOKING_SUCCESS,
    payload: data,
  };
};

const actConfirmBookingFailed = (error: any): Action => {
  return {
    type: ActionType.CONFIRM_BOOKING_FAILED,
    payload: error,
  };
};
