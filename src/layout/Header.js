import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
const Header = () => {
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height={60}
          width={60}
        />
      </div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href=""
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li> */}
          {/* <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/about-us" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li> */}

          <li className="nav-item d-none d-sm-inline-block">
            <input
              type="text"
              name="search"
              className=""
              placeholder="Search"
            />
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown user user-menu">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                className="user-image img-circle elevation-2"
                alt="user image"
              />
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* User image */}
              <li className="user-header bg-primary">
                <img
                  src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </li>
              {/* Menu Body */}
              {/* Menu Footer*/}
              <li className="user-footer d-flex">
                {/* <div className="pull-left">Profile</div> */}
                <div className="pull-right" onClick={handelLogout}>
                  <Link to="" className="btn btn-default btn-flat">
                    Sign out
                  </Link>
                </div>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
