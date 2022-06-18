import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#" tabIndex={0}>
              About
            </a>
          </li>
          <li className="dropdown">
            <button
              type="button"
              className="dropdown__title"
              aria-expanded="false"
              aria-controls="sweets-dropdown"
            >
              Sweets 🔥
            </button>
            <ul className="dropdown__menu" id="sweets-dropdown">
              <li>
                <a href="#">Donuts</a>
              </li>
              <li>
                <a href="#">Cupcakes</a>
              </li>
              <li>
                <a href="#">Chocolate</a>
              </li>
              <li>
                <a href="#">Bonbons</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
