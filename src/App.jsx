import styles from './App.module.css';
import { Navbar } from "./componets/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import About from "./pages/About/About";
import QuizPage from './pages/Quiz/QuizPage';
import Quiz from './pages/Quiz/Quiz';
import aestheticQuizData from './pages/Quiz/aestheticQuizData';
import stylePersonalityQuizData from './pages/Quiz/stylePersonalityQuizData';
import seasonalColorQuizData from './pages/Quiz/seasonalColorQuizData';
import fashionEraQuizData from './pages/Quiz/fashionEraQuizData';
import ChatbotPage from "./pages/ChatbotPage/ChatbotPage";
import capsuleWardrobeQuizData from './pages/Quiz/capsuleWardrobeQuizData';
import ecoFriendlyFabricsQuizData from './pages/Quiz/ecoFriendlyFabricsQuizData';
import upcyclingWardrobeQuizData from './pages/Quiz/upcyclingWardrobeQuizData';
import carbonFootprintQuizData from './pages/Quiz/carbonFootprintQuizData';
import sustainableShoppingQuizData from './pages/Quiz/sustainableShoppingQuizData';
 
function App() {
  return (
    <div className={styles.App}> 
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/shop" element={<Home />} />
          <Route path="/resources" element={<Map />} />
          <Route path="/" element={<About />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/aesthetic" element={<Quiz quizData={aestheticQuizData} />} />
          <Route path="/quiz/style-personality" element={<Quiz quizData={stylePersonalityQuizData} />} />
          <Route path="/quiz/seasonal-color" element={<Quiz quizData={seasonalColorQuizData} />} />
          <Route path="/quiz/fashion-era" element={<Quiz quizData={fashionEraQuizData} />} />
          <Route path="/quiz/capsule-wardrobe" element={<Quiz quizData={capsuleWardrobeQuizData} />} />
          <Route path="/quiz/eco-friendly-fabrics" element={<Quiz quizData={ecoFriendlyFabricsQuizData} />} />
          <Route path="/quiz/upcycling-wardrobe" element={<Quiz quizData={upcyclingWardrobeQuizData} />} />
          <Route path="/quiz/carbon-footprint" element={<Quiz quizData={carbonFootprintQuizData} />} />
          <Route path="/quiz/sustainable-shopping" element={<Quiz quizData={sustainableShoppingQuizData} />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
