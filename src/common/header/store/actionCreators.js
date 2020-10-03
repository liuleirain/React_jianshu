import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  GET_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({
  type: SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: SEARCH_BLUR,
});

export const mouseEnter = () => ({
  type: MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: MOUSE_LEAVE,
});

export const changePage = (page, totalPage) => ({
  type: CHANGE_PAGE,
  page,
  totalPage,
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const action = {
          type: GET_LIST,
          data: fromJS(res.data.data),
          totalPage: Math.ceil(res.data.data.length / 6),
        };
        dispatch(action);
      })
      .catch((err) => console.log(err));
  };
};
