import React from "react";
import style from './Post.module.css';

const Post = (probs) =>{
    return(
    <div className={style.content}>
        <div>
            <div>{probs.text}, {probs.time}</div>
            <span>like</span>
        </div>
    </div>
    )
}
export default Post;