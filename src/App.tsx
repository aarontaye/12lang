import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Home from './pages/Home.jsx';
import Phrases from './pages/Phrases.jsx';
import Emergency from './pages/Emergency.jsx';
import Tutor from './pages/Tutor.jsx';
import Translate from './pages/Translate.jsx';
import Children from './pages/Children.jsx';
import Culture from './pages/Culture.jsx';
import GeezClassical from './pages/GeezClassical.jsx';
import Settings from './pages/Settings.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/children" element={<Children />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/geez" element={<GeezClassical />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
