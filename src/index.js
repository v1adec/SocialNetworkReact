import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiNetwork from "./App";

ReactDOM.render(
    <SamuraiNetwork />,
    document.getElementById('root')
);

serviceWorker.unregister();
