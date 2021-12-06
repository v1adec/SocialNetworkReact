import React from "react";
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.css';
import {DialogType} from "../../../types/types";

const DialogItem: React.FC<DialogType> = ({id, name}) => {

    const path = `/dialogs/${id}`;

    return (
        <div className={styles.dialog}>
            <NavLink activeClassName={styles.active} to={path}>{name}</NavLink>
        </div>
    )
};

export default DialogItem;