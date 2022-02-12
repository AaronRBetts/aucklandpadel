import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Rules from './pages/Rules/Rules';
import Contact from './pages/Contact/Contact'
import Court from './pages/Court/Court'
import Equipment from './pages/Equipment/Equipment'
import Location from './pages/Location/Location'
import 'animate.css';

function App() {
  return (
    <div className="App">
    <Router>
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
          <Route path="/location" element={<Location />}>
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
