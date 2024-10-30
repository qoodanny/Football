import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Custom from './pages/Custom/Custom.js';
import Home from './pages/Home/Home.js';
import Players from './pages/Players/Players.js';
import Teams from './pages/Teams/Teams.js';
import Profile from './pages/Profile.js';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Custom" element={<Custom />} />
        <Route path="Players" element={<Players />} />
        <Route path="Teams" element={<Teams />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </>
  );
}
