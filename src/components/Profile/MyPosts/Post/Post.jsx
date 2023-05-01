import React from "react";

const Post = (probs) => {
    return (
        <div>
            <div>
                <div>{probs.text}, {probs.time} {probs.likeCount}</div>
            </div>
        </div>
    )
}
export default Post;