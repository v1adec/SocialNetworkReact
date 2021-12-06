import React from "react";
import styles from './Message.module.css';
import {MessageType} from "../../../types/types";

const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={styles.message}>
            <div>{message}</div>
        </div>
    )
};

export default Message;