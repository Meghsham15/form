import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import EventRegistrationForm from './components/EventRegistrationForm';
import SurveyForm from './components/SurveyForm';
import JobApplicationForm from './components/JobApplicationForm';

function App() {
  return (
    <Router>
    <nav>
      <ul>
        <li><Link to='/'> Level 1 </Link></li>
        <li><Link to='/level2'> Level 2 </Link></li>
        <li><Link to='/level3'> Level 3 </Link></li>
      </ul>
    </nav>
    <Routes>
      <Route
      path="/"
      element={<EventRegistrationForm/>}
      />
      <Route
      path="/level3"
      element={<SurveyForm/>}
      />
      <Route
      path="/level2"
      element={<JobApplicationForm/>}
      />
    </Routes>

    </Router>
  );
}

export default App;
