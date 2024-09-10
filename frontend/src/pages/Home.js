import React from "react";
import ImageSlider from "../components/ImageSlider";
import Newsletter from "../components/Newsletter";
import RecentPosts from "../components/RecentPost";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";

import './Home.css'

const Home = () => {

    return (
        <div>
            <ImageSlider/>
            <div className="moto container-fluid d-flex justify-content-center align-items-center my-5">
                <h1>Making your event a memorable one… leaving lasting great impressions.</h1>
            </div>
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <RecentPosts />
            <Newsletter />
        </div>
    )
}

export default Home;