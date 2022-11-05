import PieChart from "./Doughnutchart";
import Toolsinfobox from "./Toolsinfobox";


const Toolsmetrics = () => {
    
    return ( 
        
        <div className='toolhub__dashboard-toolsmetric_container-outerrim'>
        <div className="piechartcontainer"><PieChart/></div>
        <div className="metric-container">
        <Toolsinfobox heading={'Total Tools'} count={2765}/>
        <Toolsinfobox heading={'Missing Tools'} count={1765}/>
        <Toolsinfobox heading={'Tools Edited'} count={765}/>
        </div>
        
        </div>
        
     );
}
 
export default Toolsmetrics;