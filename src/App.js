import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App scrollbar-hide">
      <Routes>
      <Route path="/ChefKart" element={[<NavBar />,<Home />]} />
      </Routes>
    </div>
  );
}

export default App;
