import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        console.log("Subscribed with email:", email);
        setSubscribed(true);
        setEmail("");
    };

    return (
        <section className="newsletter-section">
            <div className="container newsletter-content">
                <h2 className="newsletter-title">Join Our Mailing List</h2>
                <p className="newsletter-description">
                    Elegant Impressions, a premier event planning company. Let us help you make your event memorable.
                </p>
                <p className="newsletter-benefits">
                    Receive invitations, updates, and exclusive bonuses:
                </p>
                <ul className="newsletter-benefits-list">
                    <li>Early access to seasonal promotions</li>
                    <li>Insider tips for event planning</li>
                    <li>Special discounts for subscribers</li>
                </ul>
                {!subscribed ? (
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                ) : (
                    <p className="newsletter-success">Thank you for subscribing!</p>
                )}
            </div>
        </section>
    );
};

export default Newsletter;