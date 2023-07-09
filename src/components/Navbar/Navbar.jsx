import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to={'/profile'} className={navData =>
                navData.isActive ? style.active : style.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'} className={navData =>
                    navData.isActive ? style.active : style.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/news'} className={navData =>
                    navData.isActive ? style.active : style.item}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music'} className={navData =>
                    navData.isActive ? style.active : style.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/setting'} className={navData =>
                    navData.isActive ? style.active : style.item}>Settings</NavLink>
            </div>
            <div>
                <NavLink to={'/friends'} className={navData =>
                    navData.isActive ? style.active : style.item}>Friends</NavLink>
            </div>
            <div className={style.recFriend}>
                {props.state.recommendationFriend.map(p =>(
                    <div className={style.avatarWrapper}>
                        <span><img src={p.avatar} alt={'Error'} className={style.avatar}></img></span>
                        <div className={style.nickname}>{p.name}</div>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar; 