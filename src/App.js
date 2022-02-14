import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Rules from './pages/Rules/Rules';
import Contact from './pages/Contact/Contact'
import Court from './pages/Court/Court'
import Equipment from './pages/Equipment/Equipment'
import Locations from './pages/Locations/Locations'
import 'animate.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <nav>
          <Navbar />
        </nav>
        
        <Routes>
          <Route exact path="/" element={<Landing />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/rules" element={<Rules />}>
          </Route>
          <Route path="/court" element={<Court />}>
          </Route>
          <Route path="/equipment" element={<Equipment />}>
          </Route>
          <Route path="/locations" element={<Locations />}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
