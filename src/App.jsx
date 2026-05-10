// ============================================
// BUILDATHON — Root App
// App.jsx
// ============================================

import './styles/global.css';
import './styles/utils.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useReveal } from './hooks/useReveal';

import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import Partners from './components/sections/Partners/Partners';
import About from './components/sections/About/About';
import Tracks from './components/sections/Tracks/Tracks';
import Sponsors from './components/sections/Sponsors/Sponsors';
import FAQ from './components/sections/FAQ/FAQ';
import FinalCTA from './components/sections/FinalCTA/FinalCTA';
import RequestAccess from './components/sections/RequestAccess/RequestAccess';

import Login from './pages/Login';

function HomePage() {
  useReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Partners />
        <About />
        <Tracks />
        <Sponsors />
        <FinalCTA />
        <RequestAccess />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Login / Register Page */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}