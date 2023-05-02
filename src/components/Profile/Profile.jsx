import React from "react";
import style from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://adrenaline.com.br/uploads/chamadas/genshin_impact1.jpg" width="700px"
                     height="300px"></img>
            </div>
            <div>
                avatar+description
            </div>
            <MyPost/>
        </div>
    )
}
export default Profile;
