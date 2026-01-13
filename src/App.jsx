import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundOrbs from './components/BackgroundOrbs';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import LoadingFallback from './components/LoadingFallback';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CompetitionsPage = lazy(() => import('./pages/CompetitionsPage'));
const EGamesPage = lazy(() => import('./pages/EGamesPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const GalaPage = lazy(() => import('./pages/GalaPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />

      <BackgroundOrbs />
      <ParticleBackground />
      <div className="content">
        <Header />
        <Suspense fallback={<LoadingFallback />}>
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
          </Routes >
        </Suspense >
        <Footer />
      </div >
    </Router >
  );
}

export default App;
