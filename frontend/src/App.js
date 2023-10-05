import React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component

import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Forms/Form';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/forms" element={<Form />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
