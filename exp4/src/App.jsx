import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Contact from './components/contact';

export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard/profile">Profile</Link> | {' '}
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
}

export function Settings() {
  return (
    <div>
      <h2>Settings Page</h2>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;