import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GreetingPage from './components/GreetingPage';
import LetterPage from './components/LetterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </Router>
  );
}

export default App;