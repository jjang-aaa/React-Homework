import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './styles/global.css';
import CheckBox from './components/\bCheckBox';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1> 리액트 숙제로 체크박스 만들기 </h1>
    <CheckBox />
  </React.StrictMode>
);
