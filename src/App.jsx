import LandingPage from './pages/LandingPage.jsx';
import LegalPage from './pages/LegalPage.jsx';

export default function App() {
  const { pathname } = window.location;

  if (pathname === '/privacy') return <LegalPage type="privacy" />;
  if (pathname === '/terms') return <LegalPage type="terms" />;

  return <LandingPage />;
}
