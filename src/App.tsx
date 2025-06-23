import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { BackgroundComponent } from "./components/global/BackgroundComponent";
import FooterComponent from "./components/global/FooterComponent";
import HeaderComponent from "./components/global/HeaderComponent";
import ContactPage from "./pages/ContactPage";
import DocumentationPage from "./pages/DocumentationPage";
import DownloadPage from "./pages/DownloadPage";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import PaymentPage from "./pages/PaymentPage";
import { ScrollToTop } from "./utils/ScrollToTopComponent";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden text-white">
        <BackgroundComponent />
        <HeaderComponent />

        <main className="flex-1 w-[97%] mx-auto z-10 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Analytics />
          <SpeedInsights />
        </main>

        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
