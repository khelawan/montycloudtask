import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Header from './components/header';
import Search from './components/search';
import NewsView from './components/NewsView';



function App() {
  return (
    <div className="App">
    <Header/>
      <BrowserRouter>
        <Route path="/" component={Search} />
        <Route path="/NewsView" component={NewsView} />
      </BrowserRouter>
    </div>
  );
}

export default App;
