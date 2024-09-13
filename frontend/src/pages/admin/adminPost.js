import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill'; // You'll need to install this package
import 'react-quill/dist/quill.snow.css'; // Import styles
import './adminPost.css'; // We'll create this CSS file

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Admin');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState('');
    const [tags, setTags] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (e) => {
        setMainImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('content', content);
        formData.append('categories', categories);
        formData.append('tags', tags);
        
        if(mainImage) {
            formData.append('mainImage', mainImage);
        }

        additionalImages.forEach((image) => {
            formData.append('additionalImages', image);
        });

        try {
            await axios.post('http://localhost:5000/api/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            alert('Post created successfully');
            resetForm();
        } catch (error) {
            console.error('Error creating post: ', error);
            alert('Failed to create post');
        } finally {
            setIsLoading(false);
        }
    }

    const resetForm = () => {
        setTitle('');
        setAuthor('Admin');
        setContent('');
        setCategories('');
        setTags('');
        setMainImage(null);
        setAdditionalImages([]);
    }

    return (
        <div className="admin-panel">
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        id="author"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <ReactQuill
                        value={content}
                        onChange={setContent}
                        modules={{
                            toolbar: [
                                [{ 'header': [1, 2, false] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                                ['link', 'image'],
                                ['clean']
                            ],
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories (comma-separated):</label>
                    <input
                        id="categories"
                        type="text"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags (comma-separated):</label>
                    <input
                        id="tags"
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mainImage">Main Image:</label>
                    <input
                        id="mainImage"
                        type="file"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="additionalImages">Additional Images:</label>
                    <input
                        id="additionalImages"
                        type="file"
                        multiple
                        onChange={(e) => setAdditionalImages(Array.from(e.target.files))}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Creating...' : 'Create Post'}
                </button>
            </form>
        </div>
    );
};

export default AdminPanel;