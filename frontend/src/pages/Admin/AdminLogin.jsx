import React from "react";
import { Link } from "react-router-dom";
import { Sun, Info } from "lucide-react";

// Admin panel is disabled in the static build.
// This page informs visitors that admin is not available.
const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-bgLight flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary text-white mb-4 shadow-premium">
          <Sun className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-extrabold text-heading">Admin Portal</h1>
        <div className="bg-white rounded-3xl border border-borderLight shadow-card p-8 space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-warning/10 border border-warning/30 rounded-xl text-left">
            <Info className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <p className="text-sm text-heading">
              The admin panel is not available in this static deployment. This website is fully static and does not require a backend.
            </p>
          </div>
          <Link to="/" className="block w-full py-3 cta-gradient text-white font-bold rounded-xl text-sm text-center transition-premium">
            ← Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
