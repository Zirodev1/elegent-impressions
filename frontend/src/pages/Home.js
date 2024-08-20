import React from "react";
import ImageSlider from "../components/ImageSlider";
import Newsletter from "../components/Newsletter";
import RecentPosts from "../components/RecentPost";

import './Home.css'

const Home = () => {

    return (
        <div>
            <ImageSlider/>
            <div className="moto bg-light container-fluid d-flex justify-content-center align-items-center">
                <h1>Making your event a memorable one…leaving lasting great impressions.</h1>
            </div>
            <RecentPosts />
            <Newsletter />
        </div>
    )
}

export default Home;