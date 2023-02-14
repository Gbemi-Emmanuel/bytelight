import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <IntroSection />
  <Testimonial />
  <Services />
  <Solutions />
  <Contact />
  <Footer />
  </>
);

 