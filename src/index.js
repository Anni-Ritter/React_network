import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
