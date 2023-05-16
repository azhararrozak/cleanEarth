import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center bg-light">
      <Link href="/" legacyBehavior>
        <a className="navbar-brand d-flex w-50 mr-auto">Cleanearth</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`navbar-collapse collapse w-100 ${
          isCollapsed ? '' : 'show'
        }`}
        id="collapsingNavbar3"
      >
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item active">
            <Link href="/" legacyBehavior>
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/product" legacyBehavior>
              <a className="nav-link">Product</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/tracker" legacyBehavior>
              <a className="nav-link">Tracker</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" legacyBehavior>
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item">
            <Link href="/signin" legacyBehavior>
              <a className="nav-link">
                <i className="fas fa-user" aria-hidden="true"></i> Sign in
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;