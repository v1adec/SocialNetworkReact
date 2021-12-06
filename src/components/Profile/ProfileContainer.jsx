import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getUserStatus, updateStatus, savePhoto, saveProfileData} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class ProfileContainer extends Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getUserStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                {...this.props}
                profile={this.props.profile}
                saveProfileData={this.props.saveProfileData}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    myId: state.auth.id,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});


export default compose(
    withRouter,
    WithAuthRedirect,
    connect(mapStateToProps,
        {
            getProfileThunk,
            getUserStatus,
            updateStatus,
            savePhoto,
            saveProfileData
        })
)(ProfileContainer);