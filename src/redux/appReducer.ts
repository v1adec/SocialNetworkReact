import {getAuthUserDataThunk} from "./authReducer";
import {InferActionsTypes} from "./redux-store";

const SET_INITIALIZED = 'sn/appReducer/SET_INITIALIZED';

const initialState = {
    initialized: false
};

type initialStateType = typeof initialState
//getting types automatically
type ActionType = InferActionsTypes<typeof appActions>

const appReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

const appActions = {
    initialisedSuccess: () => ({type: SET_INITIALIZED} as const)
};

export const initializeApp = ():any => (dispatch: any):void => {

    let promise = dispatch(getAuthUserDataThunk());

    Promise.all([promise])
        .then(()=>{
        dispatch(appActions.initialisedSuccess());
    })

};

export default appReducer;