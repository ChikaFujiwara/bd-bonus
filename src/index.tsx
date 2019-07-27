import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// tslint:disable-next-line: ordered-imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './button.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
