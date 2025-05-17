import styles from './App.module.css';
import { Navbar } from "./componets/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sign from "./pages/Sign/Sign";
import Map from "./pages/Map/Map";
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import QuizPage from './pages/Quiz/QuizPage';
import Quiz from './pages/Quiz/Quiz';
import aestheticQuizData from './pages/Quiz/aestheticQuizData';
import stylePersonalityQuizData from './pages/Quiz/stylePersonalityQuizData';
import seasonalColorQuizData from './pages/Quiz/seasonalColorQuizData';
import fashionEraQuizData from './pages/Quiz/fashionEraQuizData';
import ChatbotPage from "./pages/ChatbotPage/ChatbotPage";
 
function App() {
  return (
    <div className={styles.App}> 
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/aesthetic" element={<Quiz quizData={aestheticQuizData} />} />
          <Route path="/quiz/style-personality" element={<Quiz quizData={stylePersonalityQuizData} />} />
          <Route path="/quiz/seasonal-color" element={<Quiz quizData={seasonalColorQuizData} />} />
          <Route path="/quiz/fashion-era" element={<Quiz quizData={fashionEraQuizData} />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
