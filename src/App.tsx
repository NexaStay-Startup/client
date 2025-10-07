import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage1 from "./pages/HomePage1";
import HomePage2 from "./pages/HomePage2";
import HomePage4 from "./pages/HomePage4";
import TestPage from "./pages/TestPage";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/homepage2" element={<HomePage2 />} />
          <Route path="/homepage4" element={<HomePage4 />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
    </Router>
  );
}