import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addMessage, addPost} from "./redux/state";

export let rerenderEntireTree = (state) =>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>
    );
}