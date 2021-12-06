import React from "react";
import {Input, Textarea} from "../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import styles from "../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, status, aboutMe, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>SAVE</button>
            {
                error && (
                    <div className={styles.formSummaryError}>
                        {error}
                    </div>
                )
            }
            <div>
                <p>Name:</p>
                <Field
                    component={Input}
                    name={"fullName"}
                    placeholder={"Name"}
                    validate={requiredField}
                />
            </div>
            <p>Status: {status}</p>
            <div>
                <p>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
                <Field
                    component={Input}
                    name={"lookingForAJob"}
                    type={"checkbox"}
                    placeholder={"Looking for a job"}
                />
            </div>
            <div>
                <p>Job description: {profile.lookingForAJobDescription}</p>
                <Field
                    component={Textarea}
                    name={"lookingForAJobDescription"}
                    placeholder={"Job description"}
                    validate={requiredField}
                />
            </div>
            <div>
                <p>About me: {aboutMe}</p>
                <Field
                    component={Textarea}
                    name={"aboutMe"}
                    placeholder={"About me"}
                />
            </div>
            <h3>Contacts</h3>
            <ContactForm title={'Facebook'} data={profile.contacts.facebook} name={"contacts.facebook"}/>
            <ContactForm title={'GitHub'} data={profile.contacts.github} name={"contacts.github"}/>
            <ContactForm title={'Instagram'} data={profile.contacts.instagram} name={"contacts.instagram"}/>
            <ContactForm title={'Website'} data={profile.contacts.website} name={"contacts.website"}/>
            <ContactForm title={'Main link'} data={profile.contacts.mainLink} name={"contacts.mainLink"}/>
            <ContactForm title={'YouTube'} data={profile.contacts.youtube} name={"contacts.youtube"}/>
            <ContactForm title={'VK'} data={profile.contacts.vk} name={"contacts.vk"}/>
        </form>
    )
}

const ContactForm = ({title, data, name}) => {
    return (
        <div>
            <p>{title}: {data}</p>
            <Field
                component={Input}
                name={name}
                placeholder={"Contact link..."}
            />
        </div>
    )
}

const ProfileReduxForm = reduxForm({form: "profile-edit"})(ProfileDataForm);

export default ProfileReduxForm;