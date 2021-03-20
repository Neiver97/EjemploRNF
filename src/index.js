import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import '../src/index.css'
//The code
const Root =()=>{
  return(
    <div>
        <App />
    </div>
  );
}

ReactDOM.render(<Root/>, document.querySelector('#root'));
