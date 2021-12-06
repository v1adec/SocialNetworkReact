import React from "react";
import {dialogsActions} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

const DialogsContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {addMessage: dialogsActions.addMessage})
)(Dialogs);

export default DialogsContainer;