/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "@/store/GlobalState";
import Cookie from "js-cookie";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  useEffect(() => {
    setIsDropdownOpen(auth.user ? false : true);
  }, [auth]);

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
    return router.push("/");
  };

  const adminRouter = () => {
    return (
      <>
        <Link href="/users" legacyBehavior>
          <a className="dropdown-item">Users</a>
        </Link>
        <Link href="/create-product" legacyBehavior>
          <a className="dropdown-item">Create Produk</a>
        </Link>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <Link href="#" legacyBehavior>
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={handleDropdownToggle}
          >
            <img
              src={auth.user.avatar}
              alt={auth.user.avatar}
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                transform: "translateY(-3px)",
                marginRight: "3px",
              }}
            />{" "}
            {auth.user.name}
          </a>
        </Link>

        <div
          className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
          aria-labelledby="navbarDropdown"
          style={{ minWidth: "0" }}
        >
          <Link href="/profile" legacyBehavior>
            <a className="dropdown-item">Profile</a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="dropdown-item">
              <i className="position-relative" aria-hidden="true">
                <span
                  className="position-absolute"
                  style={{
                    padding: "3px 6px",
                    background: "#ed143dc2",
                    borderRadius: "50%",
                    top: "-10px",
                    right: "-10px",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  {cart.length}
                </span>
              </i>
              Cart
            </a>
          </Link>
          {auth.user.role === "admin" && adminRouter()}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
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
          isCollapsed ? "" : "show"
        }`}
        id="collapsingNavbar"
      >
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className={"nav-link" + isActive("/")}>Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/product" legacyBehavior>
              <a className={"nav-link" + isActive("/product")}>Product</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/tracker" legacyBehavior>
              <a className={"nav-link" + isActive("/tracker")}>Tracker</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" legacyBehavior>
              <a className={"nav-link" + isActive("/blog")}>Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" legacyBehavior>
              <a className={"nav-link" + isActive("/about")}>About</a>
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          {Object.keys(auth).length === 0 ? (
            <li className="nav-item">
              <Link href="/signin" legacyBehavior>
                <a className={"nav-link" + isActive("/signin")}>Sign in</a>
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
