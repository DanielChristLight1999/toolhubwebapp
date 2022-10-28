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
            <div className="toolhub__tasksection-content">
                <div className="toolhub__tasksection-content_toolheader">
                    <h3>Tool Information</h3>
                </div>
                <div className="line"/>
                <div className="toolhub__tasksection-content_tooldetails-container">
                <div className="toolhub__tasksection-content_tooldetails">
                    <p>Name: Pywikibot</p>
                    <p>Missing Info: Pywikibot</p>
                    <p>Difficulty: Easy</p>
                </div>
                <div className="toolhub__tasksection-content_toolinstructions">
                    <p>There are tools with some of its information missing on the tool hub. Find the information and submit it to climb the leaderboard. </p>
                    <p>Find More info about the tool by clicking here</p>
                </div>
                </div>
                <div className="toolhub__tasksection-content_tasksubmit-container">
                    <div className="submit__input">
                        <a href="#">Skip</a>
                        <input></input>
                        <button type="button">Submit</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Home;