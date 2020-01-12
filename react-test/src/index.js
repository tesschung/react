import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// 특정 아이디를 가진 돔을 가져와서 리액트 컴포넌트를 그리겠다는 뜻
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
