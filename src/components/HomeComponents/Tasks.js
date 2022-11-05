const Tasks = () => {

    return ( 
        <div className="toolhub__tasksection">
        <div className="toolhub__tasksection-tasktool">
            <div className="searchbar"><input placeholder="Search"></input></div>
            <div className="toolhub__tasksection-heading">
                <h1>Tool info</h1>
                <p>There are tools with some of its information missing on the tool hub. Find the information and submit it to climb the leaderboard.</p>
            </div>
            <div className="line"></div>
            <div className="toolhub__tasksection-toolinfo">
                <div className="toolinfo">
                <p>Name: Pywikibot</p>
                <p>Missing info: repository url</p>
                <p>Difficulty: Easy</p>
                </div>
                <div className="moreinfo"><p>Find More info about the tool by clicking here</p></div>
            </div>
            <div className="toolhub__tasksection-submit">
            
            <input placeholder="Enter tool info"></input>
            <button type="button">Submit</button>
            <a href="#">Skip</a>

            </div>
        </div>        
        </div>
     );
}
 
export default Tasks;