import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ element }) => {
  try {
    const token = localStorage.getItem("token");
    //console.log(element);

    if (token) {
      return element;
    } else {
      // Redirect to login page if token is not present
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error("Error in ProtectedRoute:", error);
    // Handle the error, you might want to return a default UI or redirect to an error page
    return <div>Error occurred</div>;
  }
};

export default ProtectedRoute;
