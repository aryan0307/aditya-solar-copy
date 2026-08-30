import React from "react";
import { Navigate } from "react-router-dom";

// Admin panel is disabled in the static build.
// Always redirect to the admin login page which shows the "not available" message.
const AdminLayout = () => {
  return <Navigate to="/admin/login" replace />;
};

export default AdminLayout;
