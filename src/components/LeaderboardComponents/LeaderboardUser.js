import usericon from '../../assets/usericon.png';

const LeaderboardUser = () => {
    return ( 
        <div className="toolhub__leaderboard-user">
        <div className="toolhub__leaderboard-user_container">
            <div className="user-icon">
                <img src={usericon} alt='user'/>
            </div>
            <div className="toolhub__leaderboard-user-id">
                <p>User ID: DannyyBoy77</p>
                <p>Rank: 1 </p>
                <p>Completed tasks: 49</p>
            </div>
        </div>
    </div>
     );
}
 
export default LeaderboardUser;