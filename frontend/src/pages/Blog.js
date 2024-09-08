import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import './Blog.css'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='blog-page'>
      <div className="blog-hero">
        <h1>Our Blog</h1>
        <p>Insights, Ideas, and Insperation</p>
      </div>
      <div className="blog-container">
        <main className="blog-main">
          {posts.map((post) => {
            const imageBlob = post.mainImage 
              ? new Blob([Int8Array.from(post.mainImage.data.data)], { type: post.mainImage.contentType }) 
              : null;
            const imageUrl = imageBlob ? window.URL.createObjectURL(imageBlob) : null;

            return (
              <article key={post._id} className="blog-post">
                {imageUrl && (
                  <div className="blog-post-image">
                    <img src={imageUrl} alt={post.title} />
                  </div>
                )}
                <div className="blog-post-content">
                  <h2 className="blog-post-title">{post.title}</h2>
                  <div className="blog-post-meta">
                    <span className="blog-post-author">By {post.author}</span>
                    <span className="blog-post-date">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <p className="blog-post-excerpt">{post.content.substring(0, 150)}...</p>
                  <Link to={`/post/${post._id}`} className="blog-post-link">Read More</Link>
                </div>
              </article>
            );
          })}
        </main>
        <aside className="blog-sidebar">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default Blog;