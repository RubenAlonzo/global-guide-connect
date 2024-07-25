import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Places from './pages/Places'
import PlacesDetails from './pages/PlacesDetails';
import Header from './components/Header';
import GuideDetails from './pages/GuideDetails';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/places" element={<Places />} />
          <Route path="/place-details/:placeId" element={<PlacesDetails/>}/>
          <Route path='/guide-details/:guideId' element={<GuideDetails/>}/>
        </Routes>
    </Router>
  );
};

export default App;
