import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { BackgroundComponent } from "./components/BackgroundComponent";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import ContactPage from "./page/ContactPage";
import DownloadPage from "./page/DownloadPage";
import HomePage from "./page/HomePage";
import PaymentPage from "./page/PaymentPage";
import UpdatesPage from "./page/UpdatePage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ScrollToTop } from "./utils/ScrollToTopComponent";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden text-white">
        <BackgroundComponent />
        <Header />

        <main className="flex-1 w-[97%] mx-auto z-10 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
          <Analytics />
          <SpeedInsights />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
