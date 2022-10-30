import React from "react";
import './index.css';
import HeroImage from '../assets/hammers.png'
function Home() {
    return(
        <>
        <div className="toolhub__herosection">
            <div className="toolhub__herosection-content">
                <h1>Complete Tasks On The WebApp And Climb The Ranks</h1>
                <p>There are tools with some of its information missing on the tool hub. Find the information and submit it to climb the leaderboard.</p>
            </div>
            <div className="toolhub__herosection-image">
                <img src={HeroImage} alt='image'/>
            </div>
            
        </div>
        <div className="toolhub__tasksection">
        <div className="toolhub__tasksection-container">
            <div className="toolhub__tasksection-header_container">
                <div className="toolhub__tasksection-header">
                <h1>Tool Info</h1>
                <div className="line"></div>
                </div>
                <p>There are tools with some of its information missing on the tool hub. Find the information and submit it to climb the leaderboard.</p>
            </div>
            <div className="toolhub__tasksection-details">
                <div className="toolhub__tasksection-details_info">
                    <p>Name: Pywikibot</p>
                    <p>Missing info: Repository url</p>
                    <p>Difficulty: Easy</p>
                </div>
                <div className="toolhub__tasksection-details_moreinfo">
                    <p>Find more info about the tool by clicking here</p>
                </div>
            </div>
            <div className="toolhub__tasksection-tasksubmit">
                <button type="button">Submit</button>
                <input></input>
                <a href="#">Skip task</a>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home;