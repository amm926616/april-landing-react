import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturesComponent from "./components/FeaturesComponent";
import HeroComponent from "./components/HeroComponent";
import ScreenshotComponent from "./components/ScreenshotComponent";
import DemoComponent from "./components/DemoComponent";
import DownloadComponent from "./components/DownloadComponent";
import ContactComponent from "./components/ContactComponent";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 pt-16">
        <HeroComponent />
        <FeaturesComponent />
        <ScreenshotComponent />
        <DemoComponent />
        <DownloadComponent />
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
