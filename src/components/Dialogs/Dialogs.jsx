import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (probs) => {
    let path = "/dialogs/" + probs.id;
    return (
        <div className={s.dialogsItem + ' ' + s.active}>
            <NavLink to={path} className={s.userItem}>{probs.name}</NavLink>
        </div>
    )
}

const Message = (probs) => {
    return <div className={s.message}>{probs.message}</div>
}

const Dialogs = (probs) => {

    let dialogsData = [
        {id: 1, name: 'Dem'},
        {id: 2, name: 'Kail'},
        {id: 3, name: 'Rik'},
        {id: 4, name: 'Teo'}
    ]

    let messagesData = [
        {id: 1, message: "Hi, dear~"},
        {id: 2, message: "What's up?"},
        {id: 3, message: "Come on, do it"}
    ]

    let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElement = messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div>{dialogsElement}</div>
            <div>{messagesElement}</div>
        </div>
    )
}
export default Dialogs;