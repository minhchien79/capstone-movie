import { Action } from "../../../../store/type";
import * as ActionType from "./constants";
import { AppStateDetails } from "./types";

const initialState: AppStateDetails<any> = {
  loading: false,
  data: null,
  error: null,
  danhSachGheDangDat: [],
};

const QuanLyDatVeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.MOVIE_BOOKING_REQUEST: {
      return { ...state, loading: true, data: null, error: null };
    }
    case ActionType.MOVIE_BOOKING_SUCCESS: {
      return { ...state, loading: false, data: action.payload, error: null };
    }
    case ActionType.MOVIE_BOOKING_FAILED: {
      return { ...state, loading: false, data: null, error: action.payload };
    }
    case ActionType.DAT_VE: {
      const ghe = action.payload;
      const danhSachGheCapNhat = [...state.danhSachGheDangDat];

      const index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(ghe);
      }

      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case ActionType.CONFIRM_BOOKING_SUCCESS: {
      return { ...state, danhSachGheDangDat: [] };
    }
    default:
      return { ...state };
  }
};

export default QuanLyDatVeReducer;
