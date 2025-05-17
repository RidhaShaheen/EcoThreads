import styles from './App.module.css'
import { Navbar } from "./componets/Navbar/Navbar"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sign from "./pages/Sign/Sign"
import Map from "./pages/Map/Map"
import Community from "./pages/Community/Community"
import Challenge from "./pages/Challenge/Challenge"
import Home from './pages/Home/Home';
import ChallengeDetailsPage from './components/ChallengeDetailsPage'; // Import ChallengeDetailsPage
import About from "./pages/About/About"; // Import About

function App() {

  return (
    <div className={styles.App}> 
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/map" element={<Map />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/challenge/:id" element={<ChallengeDetailsPage />} /> {/* Add this route */}
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} /> {/* Add this route */}
        </Routes>
      </Router> 
    </div>
  )
}

export default App
