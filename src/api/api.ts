import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "506264c7-e08d-447a-ae53-bbc91bc9de7d"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum | ResultCodeForCaptchaEnum> = {
    data: D,
    resultCode: RC,
    messages: Array<string>,
}