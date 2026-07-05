import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import DashboardPreview from "./components/landing/DashboardPreview";
import Problem from "./components/landing/Problem";
import Workflow from "./components/landing/workflow";
import WhyChooseUs from "./components/landing/whyChooseUs";
import AIAssistant from "./components/landing/AIAssistant";
import Industries from "./components/landing/Industries";
import Stats from "./components/landing/Stats";
import FAQ from "./components/landing/FAQ";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";
import Features from "./components/landing/Features";
import Modules from "./components/landing/Modules";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
       <Problem />
       <Workflow />
        <WhyChooseUs />
      <DashboardPreview />
      <Modules />
      <AIAssistant />
      <Industries />
      <Stats />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
