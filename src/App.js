import Header from "./components/Header/Header";
import "./App.css";
import About from "./components/About/About";
import Hero from "./components/HeroSection/Hero";
import FeatureProject from "./components/FeaatureProject/FeatureProject";
import SimpleProject from "./components/SimpleProject/SimpleProject";
import UIDesign from "./components/UIDesign/UIDesign";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <FeatureProject />
      <SimpleProject />
      <UIDesign />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
