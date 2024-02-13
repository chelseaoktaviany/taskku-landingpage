import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Download />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
