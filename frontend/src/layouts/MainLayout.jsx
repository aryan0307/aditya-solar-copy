import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bgLight">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets />
    </div>
  );
};

export default MainLayout;
