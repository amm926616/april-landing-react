import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ScrollToTop } from "./utils/ScrollToTopComponent";
import { BackgroundComponent } from "./components/global/BackgroundComponent";
import HeaderComponent from "./components/global/HeaderComponent";
import HomePage from "./pages/HomePage";
import UpdatesPage from "./pages/UpdatePage";
import ContactPage from "./pages/ContactPage";
import PaymentPage from "./pages/PaymentPage";
import DownloadPage from "./pages/DownloadPage";
import FooterComponent from "./components/global/FooterComponent";
import PrivacyPage from "./pages/PrivacyPage";
import CopyRightPage from "./pages/TermPage";
import DocumentationPage from "./pages/DocumentationPage";

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
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/link/privacy" element={<PrivacyPage />} />
            <Route path="/link/copyright" element={<CopyRightPage />} />
            <Route path="/link/documentation" element={<DocumentationPage />} />
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
