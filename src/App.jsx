import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';
import ScrollToTop from './components/ScrollToTop';
import LoadingFallback from './components/LoadingFallback';

import { Navigate } from 'react-router-dom';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CompetitionsPage = lazy(() => import('./pages/CompetitionsPage'));
const EGamesPage = lazy(() => import('./pages/EGamesPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
// const GalaPage = lazy(() => import('./pages/GalaPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const TreasureHuntOnlinePage = lazy(() => import('./pages/TreasureHuntOnlinePage'));

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />

      <WaveBackground />
      <div className="content">
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/competitions/treasurehuntonline" element={<TreasureHuntOnlinePage />} />
            <Route path="/competitions/:eventId" element={<EventDetailPage />} />
            <Route path="/competitions/egames" element={<EGamesPage />} />
            <Route path="/competitions/egames/:eventId" element={<EventDetailPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            {/* <Route path="/gala" element={<GalaPage />} /> */}
            <Route path="/hackathon" element={<Navigate to="/competitions/hackathon" replace />} />
            <Route path="/ctf" element={<Navigate to="/competitions/ctf" replace />} />
            <Route path="/digitalhunt" element={<Navigate to="/competitions/obscura" replace />} />
            <Route path="/obscura" element={<Navigate to="/competitions/obscura" replace />} />
            <Route path="/treasurehunt" element={<Navigate to="/competitions/egames/treasurehunt" replace />} />
            <Route path="/codeless" element={<Navigate to="/competitions/vibecoding" replace />} />
            <Route path="/coderush" element={<Navigate to="/competitions/coderush replace />} />
            <Route path="/promptvision" element={<Navigate to="/competitions/promptcraft replace />} />
            
          </Routes >
        </Suspense >
        <Footer />
      </div >
    </Router >
  );
}

export default App;
