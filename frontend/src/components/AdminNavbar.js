import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './AdminNavbar.css';

export default function AdminNavbar() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="admin-navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-title">
          Sahand's Blog
        </Link>
      </div>

      <form className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="navbar-collapse">
        <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={path === '/about' ? 'active' : ''}>About</Link>
        <Link to="/projects" className={path === '/projects' ? 'active' : ''}>Projects</Link>
      </div>

      <div className="navbar-actions">
        {currentUser ? (
          <div className="dropdown">
            <img
              src={currentUser.profilePicture}
              alt="user"
              className="avatar"
            />
            <div className="dropdown-content">
              <span>@{currentUser.username}</span>
              <span>{currentUser.email}</span>
              <Link to="/dashboard?tab=profile">Profile</Link>
              <button>Sign out</button>
            </div>
          </div>
        ) : (
          <Link to="/sign-in" className="signin-btn">
            Sign In
          </Link>
        )}
      </div>

      
    </nav>
  );
}
