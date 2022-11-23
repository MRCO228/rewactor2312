import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Er from './App1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const tot = ReactDOM.createRoot(document.getElementById('tot'));
function joj () {
  tot.render(
  <React.StrictMode>
    <Er />
  </React.StrictMode>
);
}
export default joj;




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
