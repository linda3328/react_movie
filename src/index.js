import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { configureStore } from './store/index'
import { Provider } from 'react-redux'
import { auth } from './store/authReducer'


var config = {
    apiKey: "AIzaSyBwe7u8H3l4ygKeZfqd4a1ZJ6MDvldMkzw",
    authDomain: "react-board-67039.firebaseapp.com",
    databaseURL: "https://react-board-67039.firebaseio.com",
    projectId: "react-board-67039",
    storageBucket: "react-board-67039.appspot.com",
    messagingSenderId: "977779597975",
    appId: "1:977779597975:web:652b102d4465c7dc"
};

firebase.initializeApp(config);

const store = configureStore();

store.dispatch(auth())


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
