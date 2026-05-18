import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Translate from './pages/Translate';
import Phrases from './pages/Phrases';
import Children from './pages/Children';
import Culture from './pages/Culture';
import Emergency from './pages/Emergency';
import GeezClassical from './pages/GeezClassical';
import Settings from './pages/Settings';
import Tutor from './pages/Tutor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route path="/" element={<AuthGuard><Home /></AuthGuard>} />
        <Route path="/translate" element={<AuthGuard><Translate /></AuthGuard>} />
        <Route path="/phrases" element={<AuthGuard><Phrases /></AuthGuard>} />
        <Route path="/children" element={<AuthGuard><Children /></AuthGuard>} />
        <Route path="/culture" element={<AuthGuard><Culture /></AuthGuard>} />
        <Route path="/emergency" element={<AuthGuard><Emergency /></AuthGuard>} />
        <Route path="/geez" element={<AuthGuard><GeezClassical /></AuthGuard>} />
        <Route path="/settings" element={<AuthGuard><Settings /></AuthGuard>} />
        <Route path="/tutor" element={<AuthGuard><Tutor /></AuthGuard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
