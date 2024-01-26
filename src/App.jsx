import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FourOFour from './pages/FourOFour';
import './App.css';
import Bookings from './pages/Bookings';
import NewRoom from './pages/NewRoom';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
            {/** <Route path="/bookings/:id element={} />" */}
            <Route path="/newroom" element={<NewRoom />} />
            <Route path="*" element={<FourOFour />} />
            
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App
