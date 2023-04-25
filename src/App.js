import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
   <div className={s.wrapper}>
   <Header/>
   <Navbar/>
   {/*<Profile/>*/}
   <Dialogs/>
   </div>
  );
}

export default App;
