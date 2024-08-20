import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError ] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError("Failed to load. Please try again later.")
        setLoading(false)
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!post) return <div>No post found</div>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{post.title}</h1>
      <p className="text-muted">
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      {post.mainImage && (
        <img
          src={`data:${post.mainImage.contentType};base64,${post.mainImage.data}`}
          alt="Main"
          className="img-fluid mb-4"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      {post.additionalImages && post.additionalImages.length > 0 && (
        <div className="mt-5">
          <h3>Additional Images</h3>
          <div className="row">
            {post.additionalImages.map((img, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img
                  src={`data:${img.contentType};base64,${img.data}`}
                  alt={`Additional ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {post.categories && post.categories.length > 0 && (
        <div className="mt-4">
          <h4>Categories:</h4>
          <ul className="list-inline">
            {post.categories.map((category, index) => (
              <li key={index} className="list-inline-item">{category}</li>
            ))}
          </ul>
        </div>
      )}
      
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4">
          <h4>Tags:</h4>
          <ul className="list-inline">
            {post.tags.map((tag, index) => (
              <li key={index} className="list-inline-item">{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Post;

