import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

// Import components and pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Announcements from './pages/Announcements'; // Make sure the path is correct
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login"  />} 
            />
            <Route 
              path="/announcements" 
              element={<Announcements />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/"  />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/"  />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
