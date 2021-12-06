import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/usr.png"
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileDataForm from "../ProfileDataForm";

const ProfileInfo = props => {
    const [editMode, setEditMode] = useState(false);

    function onMainPhotoSelected(event) {
        if (event.target.files.length > 0)
            props.savePhoto(event.target.files[0]);
    }

    const onSubmit = formData => {
        const promice = props.saveProfileData(formData);
        console.log(promice);
        promice.then(
            () => {
                setEditMode(false);
            }
        );
    };

    return props.profile ? (
        <div className="profileInfo">
            <div className={style.profileImage}>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} alt=""/>
                    {props.isOwner
                        ? <input type="file" onChange={onMainPhotoSelected}/>
                        : null}
                </div>
                <div>
                    {editMode ? (
                        <ProfileDataForm
                            initialValues={props.profile}
                            profile={props.profile}
                            status={props.status}
                            aboutMe={props.aboutMe}
                            onSubmit={onSubmit}
                        />) : (
                        <>
                            <ProfileData
                                profile={props.profile}
                                status={props.status}
                                aboutMe={props.profile.aboutMe}
                                isOwner={props.isOwner}
                                enableEditMode={() => setEditMode(true)}
                            />

                            <div>
                                <h3>Contacts:</h3>
                                <Contact title={'Facebook'} data={props.profile.contacts.facebook}/>
                                <Contact title={'GitHub'} data={props.profile.contacts.github}/>
                                <Contact title={'Instagram'} data={props.profile.contacts.instagram}/>
                                <Contact title={'Website'} data={props.profile.contacts.website}/>
                                <Contact title={'Main link'} data={props.profile.contacts.mainLink}/>
                                <Contact title={'YouTube'} data={props.profile.contacts.youtube}/>
                                <Contact title={'VK'} data={props.profile.contacts.vk}/>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
            {props.isOwner
                ? <div>
                    <ProfileStatusHooks updateStatus={props.updateStatus} status={props.status}/>
                </div>
                : null
            }

        </div>
    ) : (
        <Preloader/>
    );
};

const ProfileData = ({profile, status, aboutMe, isOwner, enableEditMode}) => {
    console.log('---about me', aboutMe)
    return (
        <div>
            {isOwner && <button onClick={enableEditMode}>EDIT</button>}
            <p>Name: {profile.fullName}</p>
            <p>Status: {status}</p>
            <p>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJob && profile.lookingForAJobDescription
                ? <p>Job description: {profile.lookingForAJobDescription}</p>
                : null
            }
            <p>About me: {aboutMe}</p>
        </div>
    )
}

const Contact = ({title, data}) => (
    <p>
        <a href={`${data}`}>{title}</a>
    </p>
);

export default ProfileInfo;