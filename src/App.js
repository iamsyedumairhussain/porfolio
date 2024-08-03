import "./App.css";
import Introduction from "./components/Introduction";
import Services from "./components/Service";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhyUs from "./components/WhyUs";
import Integration from "./components/Integration";
import Contact from "./components/ContactComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Introduction />
      <Services />
      <Skills />
      <WhyUs />
      <Integration />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
