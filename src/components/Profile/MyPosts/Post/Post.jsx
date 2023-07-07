import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div>
                <span className={s.avatar}><img src={"https://i.pinimg.com/564x/55/62/a4/5562a423e73734124aaa2af47a06b718.jpg"}></img></span>
                <div>{props.text} {props.time} {props.likeCount}</div>
            </div>
        </div>
    )
}
export default Post;