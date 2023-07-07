import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (probs) => {
    let path = "/dialogs/" + probs.id;
    return (
        <div className={s.dialogsItem + ' ' + s.active}>
            <NavLink to={path} className={s.userItem}>{probs.name}</NavLink>
        </div>
    )
}
export default DialogItem;