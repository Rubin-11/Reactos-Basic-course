import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app';


const myName = 'Сергей';

ReactDOM.render(
  <React.StrictMode>
    <App name={myName}/>
  </React.StrictMode>,
  document.getElementById('root')
);
