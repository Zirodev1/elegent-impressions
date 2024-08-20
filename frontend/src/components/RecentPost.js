import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RecentPost.css";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/posts/recent"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
        setError("Failed to load recent posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="elegant-recent-posts">
      <h2 className="section-title">Latest News</h2>
      <div className="posts-container">
        {posts.map((post, index) => {
          const imageBlob = post.mainImage 
            ? new Blob([Int8Array.from(post.mainImage.data.data)], { type: post.mainImage.contentType }) 
            : null;
          const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : null;

          return (
            <div key={post._id} className={`post-item`}>
              <div className="post-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
              <div className="post-content">
                <div className="post-meta">
                  <div className="post-date">
                    {new Date(post.date).getDate()} 
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
                    <span>{new Date(post.date).getFullYear()}</span>
                  </div>
                  <div>
                    <span className="post-author">BY {post.author.toUpperCase()}</span>
                  </div>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <Link to={`/post/${post._id}`} className="read-more">READ MORE</Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* More Posts Button */}
      <div className="more-posts">
        <Link to="/all-posts">More Posts</Link>
      </div>
    </section>
  );
};

export default RecentPosts;
