import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import References from './References';
import Services from './Services';
import Corporate from './Corporate';
import Categories from './Categories';
import './i18n';
import './css/index.css';

function App() {
  const baseName = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  return (
    <ThemeProvider>
      <Router basename={baseName}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
