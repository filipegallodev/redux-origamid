import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { data } = useSelector((state) => state.user);

  return data ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
