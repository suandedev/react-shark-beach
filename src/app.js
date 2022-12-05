import React from 'react';
import './app.css';
import Caursel from './components/Caursel';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Galery from './components/Galery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Galery/>
      <Caursel />
      <Footer />
    </div>
  );
};
export default App;
