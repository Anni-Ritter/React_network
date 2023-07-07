import React from "react";

const Post = (props) => {
    return (
        <div>
            <div>
                <div>{props.text}, {props.time} {props.likeCount}</div>
            </div>
        </div>
    )
}
export default Post;