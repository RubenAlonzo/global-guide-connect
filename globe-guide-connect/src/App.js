import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import FormPlaces from './pages/FormPlaces';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/places-form" element={<FormPlaces />} />
        <Route path="*" element={<Navigate to="/places-form" />} />
      </Routes>
    </Router>
  );
};

export default App;
