import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(p => <DialogItem name={p.name} id={p.id}/>)

    let messagesElement = props.messagesData.map(p => <Message message={p.message}/>)
    return (
        <div className={s.dialogs}>
            <div>{dialogsElement}</div>
            <div>{messagesElement}</div>
        </div>
    )
}
export default Dialogs;