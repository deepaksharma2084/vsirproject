import React from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img
            src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Demo</span>
        </Link>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <>
                <NavLink to="#" className="nav-link">
                  <p>Booking</p>
                </NavLink>

                <NavLink to="#" className="nav-link">
                  <p>Invoice</p>
                </NavLink>
              </>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
