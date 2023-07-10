import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'

const MyPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let changePost = () =>{
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }
    let postsElement = props.postData.map(p => <Post text={p.text} time={p.time} likeCount={p.like}/>)


    return (
        <div>
            <div className={s.newPost}>
                <h3>My post</h3>
                <div>
                    <textarea ref={newPostElement} onChange={changePost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={s.post}>{postsElement}</div>
        </div>
    )
}
export default MyPost;