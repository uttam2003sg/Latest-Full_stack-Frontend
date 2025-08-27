import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/"><i>Gupta Store</i></NavLink>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/service" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink></li>

            {isLoggedIn ? (
              <li><NavLink to="/logout" onClick={() => setIsMobileMenuOpen(false)}>Logout</NavLink></li>
            ) : (
              <>
                <li><NavLink to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</NavLink></li>
                <li><NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</NavLink></li>
              </>
            )}
          </ul>
        </div>

        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};
