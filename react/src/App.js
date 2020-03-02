import React from 'react';
import logo from './logo.png';
import item_example from './example-product.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Login stuff here */}
      </header>
      <div className="Store">
        {/* We might have a store header here; CSS name Store-header */}
        <div className="Item">
          <img src={item_example} className="Item-image" />
          <p>
            Zignature brand dog food
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
