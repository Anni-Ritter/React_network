import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={s.userItem}>
            <div className={s.dialogsItem + ' ' + s.active}>
                <div className={s.avatar}><img src={props.avatar} alt={"Error"}></img></div>
                {props.name}
            </div>
        </NavLink>
    )
}
export default DialogItem;