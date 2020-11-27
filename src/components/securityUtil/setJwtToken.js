import axios from "axios";

export const setJwtToken = (token) => {
  if (token) {
    //Adding token in header
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    //Removing token from header
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
