import axios from "axios";
import { actionTypes } from "../store";

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          dispatch({
            type: actionTypes.CHANGE_LOGIN,
            value: true,
          });
        } else {
          alert("登录失败");
        }
      });
  };
};

export const logout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
  value: false,
});
