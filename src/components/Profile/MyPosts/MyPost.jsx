import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'

const MyPost = (props) => {
    debugger;
    let postsElement = props.postData.map(p => <Post text={p.text} time={p.time} likeCount={p.like}/>)
    return (
        <div>
            <div className={s.newPost}>
                <h3>My post</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={s.post}>{postsElement}</div>
        </div>
    )
}
export default MyPost;