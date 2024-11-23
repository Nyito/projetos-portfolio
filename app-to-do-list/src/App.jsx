import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import TaskPage from './pages/TaskPage.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  const location = useLocation();
  const showLayout = location.pathname !== '/tarefa';
  return (
    <div>
      {/* {showLayout && <HomePage />} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tarefa" element={<TaskPage />} />
        </Routes>      
    </div>
  );
}

export default App