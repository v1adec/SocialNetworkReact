import React, {HTMLAttributes} from "react";
import styles from "./FormsControls.module.css"
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

type ValidateFieldType = {
    input: WrappedFieldInputProps, //types from definitions
    meta: WrappedFieldMetaProps, //types from definitions
    placeholder?: string,

    props: HTMLAttributes<HTMLInputElement & HTMLTextAreaElement>
}

export const Textarea: React.FC<ValidateFieldType> = ({
                             input,
                             placeholder,
                             meta: {touched, error},
                             ...props
                         }) => {
    const hasError = (touched && error);
    return (
        <div className={styles.formControl}>
            <div className={hasError ? styles.error : ""}>
                <textarea {...input} placeholder={placeholder} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Input: React.FC<ValidateFieldType> = ({
                             input,
                             placeholder,
                             meta: {touched, error},
                             ...props
                         }) => {
    const hasError = (touched && error);
    return (
        <div className={styles.formControl}>
            <div className={hasError ? styles.error : ""}>
                <input {...input} placeholder={placeholder} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};