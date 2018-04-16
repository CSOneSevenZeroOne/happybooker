import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./components/index/index.jsx";
import './css/base.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
