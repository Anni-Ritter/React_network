import React from "react";

const Post = (probs) => {
    return (
        <div>
            <div>
                <div>{probs.text}, {probs.time}</div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;