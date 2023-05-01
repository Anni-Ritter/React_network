import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (probs) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div>
                    <NavLink to={'/dialogs/1'} className={s.userItem + ' ' + s.active}>Dem</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs/2'} className={s.userItem}>Kail</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs/3'} className={s.userItem}>Rik</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs/4'} className={s.userItem}>Teo</NavLink>
                </div>
            </div>
            <div className={s.message}>
                <div>
                    Hi, dear~
                </div>
                <div>
                    What's up?
                </div>
                <div>
                    Come on, do it
                </div>
            </div>
        </div>
    )
}
export default Dialogs;