import axios from "axios";
import { CHANGE_HOME_DATA, ADD_LIST, TOGGLE_SCROLL_TOP } from "./actionTypes";
import { fromJS } from "immutable";

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const action = {
        type: CHANGE_HOME_DATA,
        topicList: res.data.data.topicList,
        articleList: res.data.data.articleList,
        recommendList: res.data.data.recommendList,
      };
      dispatch(action);
    });
  };
};

export const getMoreList = () => {
  return (dispatch) => {
    axios.get("/api/homeList.json").then((res) => {
      dispatch({
        type: ADD_LIST,
        list: fromJS(res.data.data),
      });
    });
  };
};

export const toggleTopShow = (show) => ({
  type: TOGGLE_SCROLL_TOP,
  show,
});
