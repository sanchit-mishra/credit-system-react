import axios from "axios";
import jwt_decode from "jwt-decode";
import { setJwtToken } from "../components/securityUtil/setJwtToken";

import { GET_ERROR,SET_USER} from "./types";

export const registerUser = (registerRequest, history) => async dispatch => {
    try {
        await axios.post("/student/selfRegistration", registerRequest);
        dispatch({
            type:GET_ERROR,
            payload:{},
        })
        history.push("/");
    } catch (err) {
        dispatch({
            type:GET_ERROR,
            payload:err.response.data,
        })
    }
}



export const loginUser = (loginRequest, history) => async dispatch => {
    try {
        //hit endpoint
        const res = await axios.post("/login",loginRequest);
        //extracting token
        const token = res.headers['x-auth-token'];
        //store in local storage
        localStorage.setItem("jwtToken",token);
        //set token in header
        setJwtToken(token);

        const decoded = jwt_decode(token);
        //dispatch to our securityReducer
        dispatch({
            type:SET_USER,
            payload:decoded,
        })
        
        //  dispatch({
        //      type:GET_FACULTY,
        //      payload: res.data,
        //  });

        //  dispatch({
        //      type:GET_STUDENT,
        //      payload:res.data,
        //   });

        //  history.push("/facultyProfile");

    } catch (err) {
        dispatch({
            type:GET_ERROR,
            payload:err.response.data,
        })
    }
}

export const logout = (dispatch) => {
    localStorage.removeItem("jwtToken");
    setJwtToken(false);
    dispatch({
        type:SET_USER,
        payload:{}
    });
}