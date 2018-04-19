import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./components/index/index.jsx";
import './css/base.css';
import registerServiceWorker from './registerServiceWorker';
import Book from './components/book/book.jsx';
import Header from './components/public/header.jsx';
import Banner from './components/public/banner.jsx';

import { HashRouter, Route, Link } from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
let store = createStore((state = {
	bookstatus:false
}, action) => {
	switch(action.type) {
		case 'nice':
			return Object.assign({}, state, {bookstatus: action.bookstatus});
		case 'DECREMENT':
			return state
		default:
			return state
	}
})

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <div>
                <Header></Header>
                <Banner></Banner>
                <Route path="/index" component={Index} />
                <Route path="/book" component={Book} />
            </div>
        </Provider>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();
