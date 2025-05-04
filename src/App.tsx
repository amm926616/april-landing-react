import { useRef } from "react";
import ContactComponent from "./components/ContactComponent";
import DemoComponent from "./components/DemoComponent";
import DownloadComponent from "./components/DownloadComponent";
import FeaturesComponent from "./components/FeaturesComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroComponent from "./components/HeroComponent";
import ScreenshotComponent from "./components/ScreenshotComponent";

const App =  () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 pt-16 bg-red-950">
        <HeroComponent scrollToFeatures={scrollToFeatures}/>
        <FeaturesComponent />
        <ScreenshotComponent />
        <DemoComponent />
        <DownloadComponent />
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
