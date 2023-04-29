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

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/setting'} element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
