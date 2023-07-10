import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";


const App = (props) =>
{
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sideInfo}/>
                <div className='app-content'>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessage={props.updateNewMessage}/>}/>
                        <Route path={'/profile'} element={<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPost={props.updateNewPost}/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/setting'} element={<Setting/>}/>
                        <Route path={'/friends'} element={<Friends state={props.state.friendPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
