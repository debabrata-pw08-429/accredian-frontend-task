import "./App.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
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

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "black",
            color: "white",
            fontWeight: "600",
          },
        }}
      />
    </div>
  );
}

export default App;
