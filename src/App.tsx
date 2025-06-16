import DemoSection from "./sections/DemoSection";
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
import ScreenshotSection from "./sections/ScreenshotSection";
import SupportSection from "./sections/SupportSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import UpdatesSection from "./sections/UpdatesSection";
import RoadmapSection from "./sections/RoadmapSection";
import PaymentSection from "./sections/PaymentSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden text-white">
      {/* Animated Background Elements */}
      <BackgroundComponent />

      {/* Main content container */}
      <div className="flex-1 w-[97%] mx-auto z-10">
        {/* Full width header */}
        <Header />

        <main className="pt-8">
          <div className="space-y-24 py-12">
            {/* Hero section */}
            <HeroSection
              id="home"
              className="scroll-mt-20 min-h-[90vh] flex items-center"
            />

            {/* All other sections */}
            <div className="space-y-24">
              <AboutSection id="about" className="scroll-mt-20" />
              <FeaturesSection id="features" className="scroll-mt-20" />
              <TestimonialsSection id="testimonials" className="scroll-mt-20" />
              <ComparisonSection id="comparison" className="scroll-mt-20" />
              <ScreenshotSection id="screenshots" className="scroll-mt-20" />
              <DemoSection id="demo" className="scroll-mt-20" />
              <UpdatesSection id="updates" className="scroll-mt-20" />
              <RoadmapSection id="roadmap" className="scroll-mt-20" />
              <SupportSection id="support" className="scroll-mt-20" />
              <FAQSection id="faq" className="scroll-mt-20" />
              <DownloadSection id="download" className="scroll-mt-20" />
              <ContactSection id="contact" className="scroll-mt-20" />
              <PaymentSection id="payment" className="scroll-mt-20" />
            </div>
          </div>
        </main>
      </div>

      {/* Full width footer */}
      <div className="w-full z-10">
        <div className="w-[97%] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
