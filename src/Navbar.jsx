import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { SiAzurefunctions } from "react-icons/si";
import { FcHome } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcServices } from "react-icons/fc";

import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <div className="col-12 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Manoj Electricals <SiAzurefunctions />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    <FcHome /> Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/about"
                  >
                    <FcSms style={{ color: "#ffffff" }} />
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/services"
                  >
                    <FcServices style={{ color: "#ffffff" }} />
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contact"
                  >
                    <FcReading style={{ color: "#ffffff" }} />
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
