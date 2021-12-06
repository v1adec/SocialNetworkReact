import {instance, APIResponseType} from "./api";

type MeResponseDataType = {
    id: number,
    email: string,
    login: string
}

type LoginResponseDataType = {
    id: number
}

export const authAPI = {
    me() {
        return instance
            .get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then(resp => resp.data);
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance
            .post<APIResponseType<LoginResponseDataType>>(`/auth/login`, {email, password, rememberMe, captcha})
            .then(resp => resp.data);
    },
    logOut() {
        return instance
            .delete(`/auth/login`)
            .then(resp => resp.data);
    }
};