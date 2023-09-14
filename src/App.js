import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Students from './pages/Students';
import Teachers from './pages/Teachers'; // Import the Teachers component
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Anns" element={<Announcements />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} /> {/* Add the route for Teachers */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
