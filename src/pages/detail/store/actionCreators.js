import axios from "axios";
import { GET_DETAIL } from "./actionTypes";

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res) => {
      return dispatch({
        type: GET_DETAIL,
        title: res.data.data.title,
        content: res.data.data.content,
      });
    });
  };
};
