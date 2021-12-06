import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    console.log('---profile props', props);
    return (
        <div className={styles.ProfileContent}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfileData={props.saveProfileData}
            />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;