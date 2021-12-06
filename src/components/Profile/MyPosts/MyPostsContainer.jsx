import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {profileActions} from "../../../redux/profileReducer";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost: profileActions.addPost})(MyPosts);

export default MyPostsContainer;