import AuthApi from "../../apis/auth.api";
import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from "./auth.types";
import {SET_MESSAGE} from "../Message/message.types";

export const register = (name: string, email: string, password: string) => (dispatch: any) => {
    return AuthApi.register(name, email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: "Your Account Has Been Created Successfully Please Go to Login Page",
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (username: string, password: string) => (dispatch: any) => {
    return AuthApi.login(username, password).then(
        (data) => {
            if (data) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: data},
                });
                return Promise.resolve();
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: "Your email or password not correct",
                });

                return Promise.reject();
            }

        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch: any) => {
    AuthApi.logout();
    dispatch({
        type: LOGOUT,
    });
};
