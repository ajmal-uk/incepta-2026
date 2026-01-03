import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundOrbs from './components/BackgroundOrbs';
import ParticleBackground from './components/ParticleBackground';
import HomePage from './pages/HomePage';
import CompetitionsPage from './pages/CompetitionsPage';
import EventsPage from './pages/EventsPage';
import GalaPage from './pages/GalaPage';

function App() {
  return (
    <Router>
      <Preloader />
      <BackgroundOrbs />
      <ParticleBackground />
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gala" element={<GalaPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
