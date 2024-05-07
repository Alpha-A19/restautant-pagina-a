import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="testimonial">
        <Testimonial />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
