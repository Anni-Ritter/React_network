import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, subscribe, updateNewMessage, updateNewPost} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

reportWebVitals();
