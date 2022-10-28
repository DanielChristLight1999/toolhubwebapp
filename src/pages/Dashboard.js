import React from "react";
import './index.css';
import Tools from '../assets/Tools.png';
import Tools2 from '../assets/Tools2.png';
import Tools3 from '../assets/Tools3.png';
import triangle1 from '../assets/triangle-1.png';
import Benefit from '../assets/Benefit.png';
import triangle from '../assets/triangle.png';
import frequencyimage from '../assets/missing freq.png';

function Dashboard() {
    return(
        <>
        <div className="toolhub__dashboard">
            <div className="toolhub__dashboard-header">
                <h1>Welcome to the Dashboard</h1>
            </div>
            <div className="toolhub__dashboard-toolsmetric_container">
                <div className="toolhub__dashboard-toolsmetric_metric_1">
                    <div className="toolhub__dashboard-toolsmetric_metric_1-head">
                        <h1>Total No of Tools</h1>
                    </div>
                    <div className="toolhub__dashboard-toolsmetric_metric_1-body">
                        <img src={Tools}/>
                        <p>2730</p>
                    </div>
                </div>
                <div className="toolhub__dashboard-toolsmetric_metric_1">
                    <div className="toolhub__dashboard-toolsmetric_metric_1-head">
                        <h1>Missing Tools</h1>
                    </div>
                    <div className="toolhub__dashboard-toolsmetric_metric_1-body">
                        <img src={Tools2}/>
                        <p>60</p>
                    </div>
                </div>
                <div className="toolhub__dashboard-toolsmetric_metric_1">
                    <div className="toolhub__dashboard-toolsmetric_metric_1-head">
                        <h1>Tools Edited</h1>
                    </div>
                    <div className="toolhub__dashboard-toolsmetric_metric_1-body">
                        <img src={Tools3}/>
                        <p>90</p>
                    </div>
                </div>
            </div>
            <div className="toolhub__dashboard-missingtools_container">
                <div className="toolhub__dashboard-missingtools_percentage-container">
                    <h1>Percentage of Missing Tools</h1>
                    <div className="toolhub__dashboard-missingtools_percentage-container_details">
                        <img src={Benefit} />
                        <p>60%</p>
                    </div>
                    <div className="toolhub__dashboard-missingtools_percentage-container_changes">
                        <img src={triangle} />
                        <p>10%</p>
                        <img src={triangle1} />
                    </div>
                </div>
                <div className="toolhub__dashboard-missingtools_frequency-container">
                    <h1>Missing Tools Frequency</h1>
                    <img src={frequencyimage}/>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;