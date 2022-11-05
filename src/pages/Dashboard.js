import React from "react";
import './index.css';
import Toolsmetrics from "../components/DashboardComponents/Toolsmetrics";
import Toolsfrequency from "../components/DashboardComponents/Toolsfrequency";
import Transitions from "../components/Transitions";

function Dashboard() {
    return(
        <Transitions>
        <div className="toolhub__dashboard">
            <div className="toolhub__dashboard-header">
                <h1>Welcome to the Dashboard</h1>
            </div>
            <Toolsmetrics/>
            <div className="toolhub__dashboard-missingtools_container">
                {/* <Toolspercentage/> */}
                <Toolsfrequency/>
            </div>
        </div>
        </Transitions>
    )
}

export default Dashboard;