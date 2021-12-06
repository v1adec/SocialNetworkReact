import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {securityAPI} from "../api/security-api";
import {authAPI} from "../api/auth-api";
import {InferActionsTypes, BaseThunkType} from "./redux-store";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_CAPTCHA = 'authReducer/SET_CAPTCHA';


const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

type initialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof authActions>
type ThunkType = BaseThunkType<ActionType | ReturnType<typeof stopSubmit>>

const authReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                captchaUrl: null
            };
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const authActions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
        {
            type: SET_USER_DATA,
            payload: {id, email, login, isAuth}
        } as const
    ),
    setCaptcha: (captchaUrl: string) => (
        {
            type: SET_CAPTCHA,
            payload: {captchaUrl}
        }as const
    )
};


export const getAuthUserDataThunk = () => async (dispatch: any) => {

    const response = await authAPI.me();
    if (response.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = response.data;
        dispatch(authActions.setAuthUserData(id, email, login, true));
    }

};

export const loginThunk
    = (email: string, password: string, rememberMe: boolean = false, captcha: string): ThunkType =>
    async (dispatch) => {

        const response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserDataThunk());
        } else {
            const err = response.messages.length > 0 ? response.messages[0] : "Some error";
            const errorAction = stopSubmit("login", {_error: err});
            dispatch(errorAction);

            if (response.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                console.log("need captcha");
                dispatch(getCaptchaThunk());
            }
        }
    };

export const logoutThunk = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logOut();

    if (response.resultCode === ResultCodesEnum.Success) {
        console.log(response);
        dispatch(authActions.setAuthUserData(null, null, null, false));
    }
};

export const getCaptchaThunk = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptcha();
    dispatch(authActions.setCaptcha(data.url));
};

export default authReducer;