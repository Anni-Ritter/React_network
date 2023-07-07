import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (probs) => {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/736x/47/d3/60/47d360164da03a9669b5b01d770baa0f.jpg" width="700px"
                     height="200px"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={"https://i.pinimg.com/564x/10/41/f5/1041f57641aa4cca7626dfb88830d60a.jpg"} className={s.avatar}></img>
            </div>
        </div>
    )
}

export default ProfileInfo;