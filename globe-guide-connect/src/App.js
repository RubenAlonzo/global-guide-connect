import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Places from './pages/Places'
import PlacesDetails from './pages/PlacesDetails';
import Header from './components/Header';
import GuideDetails from './pages/GuideDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import FormPlaces from './pages/FormPlaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileForm from './pages/profileForm';

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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/places-form" element={<FormPlaces />} />
        </Routes>
    </Router>
  );
};

export default App;
