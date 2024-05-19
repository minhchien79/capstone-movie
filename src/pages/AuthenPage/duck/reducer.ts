import { AppStateDetails, CurrentUser } from "./types";
import * as ActionType from "../duck/constants";
import { Action } from "../../../store/type";

const currentUser = localStorage.getItem("user");

const initialState: AppStateDetails<CurrentUser> = {
  loading: false,
  data1: currentUser ? JSON.parse(currentUser) : null,
  error: null,
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST: {
      state.loading = true;
      state.data1 = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.USER_LOGIN_SUCCESS: {
      state.loading = false;
      state.data1 = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.USER_LOGIN_FAILED: {
      state.loading = false;
      state.data1 = null;
      state.error = action.payload;
      return { ...state };
    }
    case ActionType.USER_LOGOUT: {
      localStorage.removeItem("user");
      return { ...state, data1: null };
    }
    case ActionType.USER_REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
        data1: null,
        error: null,
      };
    }
    case ActionType.USER_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data1: action.payload,
        error: null,
      };
    }
    case ActionType.USER_REGISTER_FAILED: {
      return {
        ...state,
        loading: false,
        data1: null,
        error: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
