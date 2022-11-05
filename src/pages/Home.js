import Header from "../components/HomeComponents/Header";
import Tasks from "../components/HomeComponents/Tasks";
import Transitions from "../components/Transitions";

const Home = () => {
    return ( 
        <Transitions>
        <Header/>
        <Tasks/>
        </Transitions>
     );
}
 
export default Home;