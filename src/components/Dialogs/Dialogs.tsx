import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessageForm";
import {DialogPageType} from "../../types/types";

type DialogsPropsType = {
    dialogsPage: DialogPageType,
    addMessage: (text: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 dialogsPage,
                                                 addMessage
                                             }) => {

    const {dialogData, messagesData} = dialogsPage;

    //arrays of components
    const dialogsElements = dialogData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    const messagesElements = messagesData.map(messageItem => <Message key={messageItem.id}
                                                                      message={messageItem.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsBlock}>

                {dialogsElements}

            </div>
            <div className={styles.messagesBlock}>

                {messagesElements}

                <NewMessage addMessage={addMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;