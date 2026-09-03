import AboutEvent from '../components/sections/AboutEvent.jsx';
import EventHighlights from '../components/sections/EventHighlights.jsx';
import EventSelection from '../components/sections/EventSelection.jsx';
import FAQ from '../components/sections/FAQ.jsx';
import FeatureBanner from '../components/sections/FeatureBanner.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';
import Hero from '../components/sections/Hero.jsx';
import MarqueeBar from '../components/sections/MarqueeBar.jsx';
import MobileBottomNav from '../components/layout/MobileBottomNav.jsx';
import ParticipantInfo from '../components/sections/ParticipantInfo.jsx';
import QuickFacts from '../components/sections/QuickFacts.jsx';
import Venue from '../components/sections/Venue.jsx';
import WhyParticipate from '../components/sections/WhyParticipate.jsx';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeBar />
        <QuickFacts />
        <AboutEvent />
        <FeatureBanner />
        <EventHighlights />
        <EventSelection />
        <WhyParticipate />
        <ParticipantInfo />
        <FAQ />
        <Venue />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
