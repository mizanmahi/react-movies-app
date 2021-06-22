import React from 'react';

import Header from './components/Header/Header';
import Home from "./components/Home"

import { GlobalStyles } from "./globalStyles"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyles />
    </div>
  );
}

export default App;
