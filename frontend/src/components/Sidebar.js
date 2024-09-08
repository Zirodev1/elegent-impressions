import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './Sidebar.css'

const Sidebar = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts?limit=5');
        setRecentPosts(response.data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="sidebar">
    <section className="sidebar-section search-section">
      <h3>Search</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </section>

    <section className="sidebar-section recent-posts-section">
      <h3>Recent Posts</h3>
      <ul className="recent-posts-list">
        {recentPosts.map((post) => {
          const imageBlob = post.mainImage 
            ? new Blob([Int8Array.from(post.mainImage.data.data)], { type: post.mainImage.contentType }) 
            : null;
          const imageUrl = imageBlob ? window.URL.createObjectURL(imageBlob) : null;

          return (
            <li key={post._id} className="recent-post-item">
                {imageUrl && (
                  <img src={imageUrl} alt={post.title} className="recent-post-image" />
                )}
                <div className="recent-post-info">
                  <Link to={`/post/${post._id}`} className="recent-post-title">
                    {post.title}
                  </Link>
                  <span className="recent-post-date">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </li>
          );
        })}
      </ul>
    </section>

    <section className="sidebar-section categories-section">
      <h3>Categories</h3>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </section>

    <section className="sidebar-section tags-section">
      <h3>Tags</h3>
      <div className="tags-cloud">
        {tags.map((tag, index) => (
          <Link key={index} to={`/tag/${tag}`} className="tag-item">
            {tag}
          </Link>
        ))}
      </div>
    </section>
  </div>
  );
};

export default Sidebar;
