import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'

const MyPost = () => {

    let postData = [
        {id: 1, text: "Hi! What's u name?", time: "21:09", like: "0"},
        {id: 2, text: "Hi! It's my first post?", time: "21:10", like: "69"},
    ]

    let postsElement = postData.map(p => <Post text={p.text} time={p.time} likeCount={p.like}/>)
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