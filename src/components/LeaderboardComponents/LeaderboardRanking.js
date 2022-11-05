const LeaderboardRanking = () => {
    return ( 
        <div className="toolhub__leaderboard-rankings_container">
        <div className="toolhub__leaderboard-rankings_container-wrap">
            <div className="toolhub__leaderboard-rankings_rank">
                <h2>Rank</h2>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </div>
            <div className="toolhub__leaderboard-rankings_Userid">
                <h2>UserID</h2>
                <p>DannyBoyyy77</p>
                <p>Tabby578</p>
                <p>Ellenello</p>
                <p>MichaelCS12</p>
                <p>Cehmann99</p>
                <p>Keelzm09</p>
                
            </div>
            <div className="toolhub__leaderboard-rankings_completed">
                <h2>Completed Tasks</h2>
                <p>49</p>
                <p>34</p>
                <p>33</p>
                <p>17</p>
                <p>17</p>
                <p>16</p>

            </div>
        </div>
        <div className="toolhub__leaderboard-rankings_pagination">
            <p>Page 1 of 10</p>
            <button class="btn"><i class="fa fa-arrow-left"></i> previous</button>
            <button class="btn"><i class="fa fa-arrow-right"></i> next</button>
            
        </div>
    </div>
     );
}
 
export default LeaderboardRanking;