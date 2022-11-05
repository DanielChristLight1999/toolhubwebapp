import HeroImage from '../../assets/hammers.png';

const Header = () => {
    return ( 
        <div className="toolhub__herosection">
            <div className="toolhub__herosection-content">
                <h1>Complete Tasks On The WebApp And Climb The Ranks</h1>
                <p>There are tools with some of its information missing on the tool hub. Find the information and submit it to climb the leaderboard.</p>
            </div>
            <div className="toolhub__herosection-image">
                <img src={HeroImage} alt='image'/>
            </div>
            
        </div>
     );
}
 
export default Header;