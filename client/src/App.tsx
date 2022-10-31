import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/register" />
        <Route path="/login" />
        <Route path="/customers" />
        <Route path="/customers/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
