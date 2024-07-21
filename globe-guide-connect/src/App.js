import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PlacesDetails from './pages/PlacesDetails';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/place-details/:placeId" element={<PlacesDetails/>}/>
        </Routes>
    </Router>
  );
};

export default App;
