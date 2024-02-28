import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
const Layouts = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
