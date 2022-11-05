import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <main>
              <Navbar/>
              <Routes>
                  <Route exact path="/home" element={<Home/>} />
                  <Route exact path="/dashboard" element={<Dashboard/>} />
                  <Route exact path="/leaderboard" element={<Leaderboard/>} />
              </Routes>
          </main>
      </BrowserRouter>
  );
}

export default App;