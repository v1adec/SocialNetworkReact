import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/authReducer";

class HeaderContainer extends Component {



    render() {

        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
);

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);