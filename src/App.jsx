import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundOrbs from './components/BackgroundOrbs';
import ParticleBackground from './components/ParticleBackground';
import HomePage from './pages/HomePage';
import CompetitionsPage from './pages/CompetitionsPage';
import EGamesPage from './pages/EGamesPage';
import EventsPage from './pages/EventsPage';
import GalaPage from './pages/GalaPage';
import EventDetailPage from './pages/EventDetailPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import RegisterPage from './pages/RegisterPage';
import RegisterSuccessPage from './pages/RegisterSuccessPage';

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Preloader />
      <BackgroundOrbs />
      <ParticleBackground />
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/competitions/:eventId" element={<EventDetailPage />} />
          <Route path="/competitions/egames" element={<EGamesPage />} />
          <Route path="/competitions/egames/:eventId" element={<EventDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventDetailPage />} />
          <Route path="/gala" element={<GalaPage />} />
          <Route path="/register/:eventId" element={<RegisterPage />} />
          <Route path="/register-success/:eventId" element={<RegisterSuccessPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
