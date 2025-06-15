import DemoComponent from "../backup/DemoComponent";
import { BackgroundComponent } from "./components/BackgroundComponent";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import AboutSection from "./sections/AboutSection";
import ComparisonSection from "./sections/ComparisonSection";
import ContactSection from "./sections/ContactSection";
import DownloadSection from "./sections/DownloadSection";
import FAQSection from "./sections/FAQSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import PricingSection from "./sections/PricingSection";
import ScreenshotSection from "./sections/ScreenshotSection";
import SupportSection from "./sections/SupportSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import UpdatesSection from "./sections/UpdatesSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      
      <BackgroundComponent />
      
      <Header />
      <main className="flex-grow p-4">
        <HeroSection id="home" className="scroll-mt-16" />
        <AboutSection id="about" className="scroll-mt-16" />
        <FeaturesSection id="features" className="scroll-mt-16" />
        <TestimonialsSection id="testimonials" className="scroll-mt-16" />
        <ComparisonSection id="comparison" className="scroll-mt-16" />
        <ScreenshotSection id="screenshots" className="scroll-mt-16" />
        <DemoComponent id="demo" className="scroll-mt-16" />
        <UpdatesSection id="updates" className="scroll-mt-16" />
        <SupportSection id="support" className="scroll-mt-16" />
        <FAQSection id="faq" className="scroll-mt-16" />
        <PricingSection id="pricing" className="scroll-mt-16" />
        <DownloadSection id="download" className="scroll-mt-16" /> 
        <ContactSection id="contact" className="scroll-mt-16" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
