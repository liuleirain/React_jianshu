import { fromJS } from "immutable";
import { CHANGE_HOME_DATA, ADD_LIST, TOGGLE_SCROLL_TOP } from "./actionTypes";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case ADD_LIST:
      return state.set(
        "articleList",
        state.get("articleList").concat(action.list)
      );
    case TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
