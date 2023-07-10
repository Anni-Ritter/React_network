import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogsData:[
            {id: 1, name: 'Dem', avatar: 'https://i.pinimg.com/564x/05/37/fd/0537fdcc65ead7cd7d0420b76290c352.jpg'},
            {id: 2, name: 'Kail', avatar: 'https://i.pinimg.com/564x/c1/42/aa/c142aaad8d7366676d90b531ab31d23f.jpg'},
            {id: 3, name: 'Rik', avatar: 'https://i.pinimg.com/564x/d1/b5/15/d1b515060ee5cd9cd74445a6e5e1f77b.jpg'},
            {id: 4, name: 'Teo', avatar: 'https://i.pinimg.com/564x/44/f5/e6/44f5e63e7832df5efe504e2cd6df98cf.jpg'}
        ],
        messagesData: [
            {id: 1, message: "Hi, dear~"},
            {id: 2, message: "What's up?"},
            {id: 3, message: "Come on, do it"}
        ],
        newMessageText: ''
    },
    profilePage:{
        postData: [
            {id: 1, text: "Hi! What's u name?", time: "21:09", like: "0"},
            {id: 2, text: "Hi! It's my first post?", time: "21:10", like: "69"}
        ],
        newPostText: ''
    },
    friendPage:{
        friendData:[
            {id: 1, name: 'Dem', avatar: 'https://i.pinimg.com/564x/05/37/fd/0537fdcc65ead7cd7d0420b76290c352.jpg'},
            {id: 2, name: 'Kail', avatar: 'https://i.pinimg.com/564x/c1/42/aa/c142aaad8d7366676d90b531ab31d23f.jpg'},
            {id: 3, name: 'Rik', avatar: 'https://i.pinimg.com/564x/d1/b5/15/d1b515060ee5cd9cd74445a6e5e1f77b.jpg'},
            {id: 4, name: 'Teo', avatar: 'https://i.pinimg.com/564x/44/f5/e6/44f5e63e7832df5efe504e2cd6df98cf.jpg'},
            {id: 5, name: 'Tao', avatar: 'https://i.pinimg.com/564x/78/3e/ab/783eab2dad2bf0eba98058379f584400.jpg'}
        ]
    },
    sideInfo:{
        recommendationFriend:[
            {id: 1, name: 'Jessica', avatar: 'https://i.pinimg.com/564x/65/32/f7/6532f7bf2351ce6cff02a8b6d813f63c.jpg'},
            {id: 2, name: 'Leia', avatar: 'https://i.pinimg.com/564x/aa/32/e8/aa32e8be5c3afbeb5aa3caf9cbb53dab.jpg'},
            {id: 3, name: 'Nathan', avatar: 'https://i.pinimg.com/564x/be/e6/37/bee6371cfec5f2becbc66de3f939be0a.jpg'},
            {id: 4, name: 'Teo', avatar: 'https://i.pinimg.com/564x/44/f5/e6/44f5e63e7832df5efe504e2cd6df98cf.jpg'},
            {id: 5, name: 'Tao', avatar: 'https://i.pinimg.com/564x/78/3e/ab/783eab2dad2bf0eba98058379f584400.jpg'}
        ]
    }
}

export let addPost = () =>{
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        time: new Date().toTimeString().split(" ")[0],
        like: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPost = (postText) =>{
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}

export let addMessage = () =>{
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessage = (newText) =>{
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}



export default state;