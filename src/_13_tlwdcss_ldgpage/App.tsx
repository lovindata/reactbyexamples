import "./App.css";

// External component
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { CallToAction } from "./components/CallToAction";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
}

export default App;
