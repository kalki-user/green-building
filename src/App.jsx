import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Techniques from './pages/Techniques';
import Materials from './pages/Materials';
import Essentials from './pages/Essentials';
import Ratings from './pages/Ratings';
import Matchmaker from './pages/Matchmaker';
import Calculator from './pages/Calculator';
import Glossary from './pages/Glossary';
import Quiz from './pages/Quiz';
import Auth from './pages/Auth';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/essentials" element={<Essentials />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/matchmaker" element={<Matchmaker />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
