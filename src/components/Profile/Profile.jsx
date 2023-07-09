import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.state.postData} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;