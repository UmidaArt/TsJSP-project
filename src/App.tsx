import React from 'react';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Todos from "./components/Todos";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="todos" element={<Todos />}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
