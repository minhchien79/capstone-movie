import { Action } from "../../../store/type";
import api from "../../../utils/apiUtils";
import * as ActionType from "./../duck/constants";

export const actFetchUserLogin = (user: {
  taiKhoan: string;
  matKhau: string;
}) => {
  return (dispatch: any) => {
    dispatch(actUserLoginRequest());

    api
      .post(`/QuanLyNguoiDung/DangNhap`, user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.content));
        dispatch(actUserLoginSuccess(response.data.content));
      })
      .catch((error: any) => {
        dispatch(actUserLoginFailed(error));
      });
  };
};

const actUserLoginRequest = (): Action => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
  };
};

const actUserLoginSuccess = (data: any): Action => {
  return {
    type: ActionType.USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const actUserLoginFailed = (error: any): Action => {
  return {
    type: ActionType.USER_LOGIN_FAILED,
    payload: error,
  };
};
export const logout = () => {
  return {
    type: ActionType.USER_LOGOUT,
  };
};
export const actRegisterUser = (user: {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maLoaiNguoiDung: string;
  hoTen: string;
}) => {
  return (dispatch: any) => {
    dispatch(actRegisterUserRequest());

    api
      .post(`/QuanLyNguoiDung/DangKy`, user)
      .then((response) => {
        dispatch(actRegisterUserSuccess(response.data.content));
      })
      .catch((error) => {
        dispatch(actRegisterUserFailed(error));
      });
  };
};

const actRegisterUserRequest = () => {
  return {
    type: ActionType.USER_REGISTER_REQUEST,
  };
};

const actRegisterUserSuccess = (data: any) => {
  return {
    type: ActionType.USER_REGISTER_SUCCESS,
    payload: data,
  };
};

const actRegisterUserFailed = (error: any) => {
  return {
    type: ActionType.USER_REGISTER_FAILED,
    payload: error,
  };
};
