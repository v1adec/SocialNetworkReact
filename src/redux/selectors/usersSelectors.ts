import {createSelector} from "reselect";
import { AppStateType } from "../redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
};

/*
* getUsers - примитивный селектор
* users => { return users.filter(u => true)} - выполняет сложную логику с данными,
* которые получены из примитивного селектора, и при этом
* getUserSuperSelector - принимает state*/

export const getUserSelector = createSelector( getUsers, users => {
    return users;
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}