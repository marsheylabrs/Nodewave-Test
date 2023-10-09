import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Make from './Pages/Make';
import Mobile from './Pages/Mobile';
import Portfolio from './Pages/Portfolio';
import Website from './Pages/Website';

import Navigation from './Components/Navbar/Navigation';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <Router >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make" element={<Make />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/website" element={<Website />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
