import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Dem'},
    {id: 2, name: 'Kail'},
    {id: 3, name: 'Rik'},
    {id: 4, name: 'Teo'}
]

let messagesData = [
    {id: 1, message: "Hi, dear~"},
    {id: 2, message: "What's up?"},
    {id: 3, message: "Come on, do it"}
]

let postData = [
    {id: 1, text: "Hi! What's u name?", time: "21:09", like: "0"},
    {id: 2, text: "Hi! It's my first post?", time: "21:10", like: "69"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData}
         messagesData={messagesData}
         postData={postData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
