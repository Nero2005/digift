import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="container-fluid">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="navbar-brand">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="30"
              height="30"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <NavLink to="/" className="home-link">
              Digift
            </NavLink>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/personal"
                href="#responsive-header"
                className="nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Personal
                <ChevronRightIcon />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/business"
                href="#responsive-header"
                className="nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Business
                <ChevronRightIcon />
              </NavLink>
            </li>
          </ul>
          <div id="nav-2">
            <form>
              <span id="find-cards">
                <SearchIcon />
                <input
                  type="search"
                  placeholder="Find cards anywhere"
                  className="form-control me-2"
                />
              </span>
            </form>
            <div className="light-dark">
              <span className="light-c">
                <LightModeIcon className="light" />
              </span>
              <span className="dark-c">
                <ModeNightOutlinedIcon className="dark" />
              </span>
            </div>
            <a
              href="#"
              id="login"
              className="text-sm px-4 py-2 leading-none border rounded text-black bg-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
            <a
              href="#"
              id="get-started"
              className="text-sm px-4 py-2 leading-none border rounded text-white bg-primary border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
