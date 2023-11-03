import React from "react";
import bannerImg from "../assets/Images/banner-1.png"
import '../assets/scss/Components/banner.scss'

export const Banner = () => {
    return (
        <div className="banner-container">
            <img src={bannerImg} alt="" />
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}