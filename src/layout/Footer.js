import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <strong>
          Copyright © 2024-2025 <a href="https://adminlte.io">Developer</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0
        </div>
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
};

export default Footer;
