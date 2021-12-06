import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

/*define type U and return it or return nothing*/

// type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
//
// export type InferActionsTypes<T extends {[key: string]:  (...args: any[])=> any}> = ReturnType<PropertiesType<T>>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

type RootReducerType = typeof rootReducer;
//Define type from RootReducerType type
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;