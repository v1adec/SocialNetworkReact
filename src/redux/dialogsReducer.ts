import {InferActionsTypes} from "./redux-store";
import {DialogType, MessageType} from "../types/types";

const ADD_MESSAGE = 'dialogsReducer/ADD-MESSAGE';

const initialState = {
    dialogData: [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Sasha'},
    ] as Array<DialogType>,

    messagesData: [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What are you doing?'},
        {id: 4, message: 'Hi!'},
    ] as Array<MessageType>
};

export type InitialStateType = typeof initialState
export type DialogsActionsType = InferActionsTypes<typeof dialogsActions>

const dialogsReducer = (state = initialState, action: DialogsActionsType) : InitialStateType => {

    switch (action.type) {
        case(ADD_MESSAGE):

            const newMessage = {
                id: 5,
                message: action.newMessageText,
            };

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };

        default:
            return state;
    }
};

export const dialogsActions = {
    addMessage: (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText})
};

export default dialogsReducer;