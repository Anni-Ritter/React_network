import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (probs) => {
    return (
        <div>
            <div>
                <img src="https://adrenaline.com.br/uploads/chamadas/genshin_impact1.jpg" width="700px"
                     height="300px"></img>
            </div>
            <div className={s.descriptionBlock}>
                avatar+description
            </div>
        </div>
    )
}

export default ProfileInfo;