import triangle1 from '../../assets/triangle-1.png';
import Benefit from '../../assets/Benefit.png';
import triangle from '../../assets/triangle.png';

const Toolspercentage = () => {
    return ( 
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
     );
}
 
export default Toolspercentage;