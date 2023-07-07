import React from "react";
import s from "./Friends.module.css";
const Friends = (props) =>{
    return(
        <div>
            {props.state.friendData.map(p => (
                <div className={s.item}>
                    <span className={s.avatar}><img src={p.avatar}></img></span>
                    <span>{p.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Friends;