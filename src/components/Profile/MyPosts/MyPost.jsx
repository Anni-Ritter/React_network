import React from "react";
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            <div>
                My post
                <Post text={"Hi! What's u name?"} time={"21:09"}/>
                <Post text={"Hi! It's my first post"} time={"21:10"}/>
            </div>
        </div>
    )
}
export default MyPost;