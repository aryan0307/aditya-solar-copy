import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Public Pages
import Home from './pages/Public/Home';
import About from './pages/Public/About';
import Products from './pages/Public/Products';
import ProductDetails from './pages/Public/ProductDetails';
import Projects from './pages/Public/Projects';
import ProjectDetails from './pages/Public/ProjectDetails';
import Services from './pages/Public/Services';
import Contact from './pages/Public/Contact';
import Gallery from './pages/Public/Gallery';
import GovSubsidy from './pages/Public/GovSubsidy';
import CalculatorPage from './pages/Public/CalculatorPage';
import Careers from './pages/Public/Careers';
import FAQPage from './pages/Public/FAQPage';

// Admin Pages
import AdminLogin from './pages/Admin/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetails />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="government-subsidy" element={<GovSubsidy />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="careers" element={<Careers />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>

        {/* Admin Login (Disabled Message) */}
        <Route path="/admin/*" element={<AdminLogin />} />

        {/* 404 Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
