import React, { useState } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import "./Navbar.css";
import appLogo from "../assets/app-logo.png";
import { categoryList } from "../utils/appUtils";

const Navbar = ({ onSearch, totalProductsAddedToCart }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query.trim());
    setQuery("");
  };

  const handleLogoClick = () => {
    onSearch("");
  };

  const handleCategoryClick = (category) => {
    onSearch(category);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          className="app-logo"
          src={appLogo}
          onClick={handleLogoClick}
          alt="logo"
          loading="lazy"
        />
      </div>

      <div className="category-dropdown">
        <button className="category-button" onMouseOver={() => setIsOpen(true)}>
          Categories
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 7l5 5 5-5H5z" />
          </svg>
        </button>
        {!!isOpen && (<ul className="dropdown-menu">
          {categoryList.map((category) => (
            <li
              key={category.key}
              onClick={() => handleCategoryClick(category.key)}
            >
              {category.value}
            </li>
          ))}
        </ul>)}
      </div>
      
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <FiSearch size={22} />
        </button>
      </form>

      <div className="navbar-right">
        <div className="cart-icon-wrapper">
          <button className="icon-button" aria-label="Cart">
            <FiShoppingCart size={28} />
            {totalProductsAddedToCart > 0 && (
              <span className="cart-badge">{totalProductsAddedToCart}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
