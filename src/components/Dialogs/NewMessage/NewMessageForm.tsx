import React, {Component} from "react";
import styles from './NewMessage.module.css';
import sendImg from "./../../../img/paper-plane-1.png"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const NEW_MESSAGE = "newMessage";

type PropTypes = {}

const NewMessageForm: React.FC<InjectedFormProps<FormDataType, PropTypes> & PropTypes> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.createNewMessageBlock}>
            <div className={styles.textareaBlock}>
                <Field
                    component={Textarea}
                    name={"newMessage"}
                    type={"text"}
                    placeholder={"New message"}
                    validate={requiredField}/>
            </div>
            <div className={styles.btnBlock}>
                <button>
                    <img src={sendImg} alt={'sendIMG'}/>
                </button>
            </div>
        </form>
    )
};

const NewMessageReduxForm = reduxForm<FormDataType>({form: NEW_MESSAGE})(NewMessageForm);

type FormDataType = {
    text: string
}
type FormDataTypeKeys = Extract<keyof FormDataType, string>;

type NewMessageType = {
    addMessage: (data: string) => void
}

const NewMessage: React.FC<NewMessageType> = ({addMessage}) => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData.text);
        addMessage(formData.text);
    };

    return <NewMessageReduxForm onSubmit={onSubmit}/>
}

export default NewMessage;