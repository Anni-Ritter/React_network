import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsData.map(p => <DialogItem name={p.name} id={p.id} avatar={p.avatar}/>)
    let messagesElement = props.state.messagesData.map(p => <Message message={p.message}/>)
    let newMessage = React.createRef();

    let addNewMessage = () => {
        props.addMessage();
        newMessage.current.value = '';
    }

    let updateMessage = () =>{
        let text = newMessage.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElement}</div>
            <div className={s.message}>{messagesElement}</div>
            <div className={s.addMessage}>
                <textarea ref={newMessage} onChange={updateMessage} value={props.newMessageText}></textarea>
                <button onClick={addNewMessage}><img src={'https://i.pinimg.com/564x/a8/e1/99/a8e199ec41a6f909eed018d685e3dd6c.jpg'}></img></button>
            </div>
        </div>
    )
}
export default Dialogs;