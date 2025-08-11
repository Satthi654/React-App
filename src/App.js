import React, { Suspense, lazy } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ServiceComponent from './components/ServiceComponent';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MarqueeComponent from './components/MarqueeComponent';
import TechnologiesComponent from './components/TechnologiesComponent';
import CareersComponent from './components/CareersComponent';
import ContactUs from './components/ContactUs';
import LoginComponent from './components/LoginComponent';
const IndustriesComponent = lazy(() => import('./components/IndustriesComponent'));


function Loader() {
  return (
    <div className="portfolio-loader">
      <div className="spinner"></div>
      <span>Loading Portfolio...</span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="fixed-header">
          <MarqueeComponent />
          <NavBarComponent />
        </div>
        <div className="main-content">
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/about' element={<AboutComponent />} />
            <Route path='/services' element={<ServiceComponent />} />
            <Route path='/industries' element={<IndustriesComponent />} />
            <Route path='/technologies' element={
              <Suspense fallback={<Loader />}>
                <TechnologiesComponent />
              </Suspense>
            } />
            <Route path='/careers' element={
              <Suspense fallback={<Loader />}>
                <CareersComponent />
              </Suspense>
            } />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
        </div>
        <FooterComponent />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
