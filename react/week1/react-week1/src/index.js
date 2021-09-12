import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appMockup from './TodoListAppMockup.png';
import reportWebVitals from './reportWebVitals';

function TodoListAppMockup() {
    return (
        <div className="TodoListAppMockup" style={{ display: "flex", justifyContent: "center" }}>
            <img src={appMockup} style={{ width: "600px" }} className="App-Mockup" alt="App Mockup" />
        </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoListAppMockup />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
