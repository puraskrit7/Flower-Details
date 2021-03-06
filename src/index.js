import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route} from 'react-router-dom';
import FlowerDetail from './FlowerDetail';

ReactDOM.render(
  <BrowserRouter>
   <div>
     <Route path="/" exact="true" component={App}/>
     <Route path="/flowerDetail"  component={FlowerDetail}/>
   </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
