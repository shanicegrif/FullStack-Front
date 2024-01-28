import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FourOFour from './pages/FourOFour';
import Home from "./pages/Home";
import NavBar from "./components/Navbar"
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      {/* <Footer /> */}
    </div>
  )
}

export default App
