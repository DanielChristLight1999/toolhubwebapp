import './index.css';
import '@fortawesome/fontawesome-free/js/all'
import LeaderboardUser from "../components/LeaderboardComponents/LeaderboardUser";
import LeaderboardRanking from "../components/LeaderboardComponents/LeaderboardRanking";
import Transitions from '../components/Transitions';

const Leaderboard = () => {
    return (
        <Transitions>
            <div className="toolhub__leaderboard">
                <div className="toolhub__leaderboard-header">
                    <h1>Leaderboard Ranking</h1>
                </div>
                <div className="toolhub__leaderboard-details_container">
                    <LeaderboardUser/>
                    <div className="toolhub__leaderboard-rankings">
                        <LeaderboardRanking/>
                    </div>
                </div>
            </div>
        </Transitions>
    )
}

export default Leaderboard;
