import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType): PropsType => ({
    isAuth: state.auth.isAuth
});

type PropsType = {
    isAuth: boolean
}

export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    //only PropsType is needed for RedirectComponent
    const RedirectComponent: React.FC<PropsType & {}> = ({isAuth, ...props}) => {

        // console.log('hoc props', this.props);

        return !isAuth ?
            (
                <Redirect to={'/login'}/>
            ) : (
                <WrappedComponent {...props as WCP}/>
            )
    }

    return connect<PropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}

export default WithAuthRedirect;