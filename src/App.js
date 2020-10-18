import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header';
import Form from './components/PostForm/PostForm';
import Contents from './components/contents/Contents'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contents />
      <Form />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
