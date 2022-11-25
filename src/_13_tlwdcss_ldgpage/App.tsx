import "./App.css";

// External component
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
}

export default App;
