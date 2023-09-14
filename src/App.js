import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components and pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Announcements from './pages/Announcements'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
