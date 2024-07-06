import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowToReferSection from "./components/HowToReferSection";
import ReferralBenefitsSection from "./components/ReferralBenefitsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ReferralForm from "./components/ReferralForm";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <ReferralForm open={open} setOpen={setOpen} />
      <Header />
      <HeroSection setOpen={setOpen} />
      <HowToReferSection setOpen={setOpen} />
      <ReferralBenefitsSection setOpen={setOpen} />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
