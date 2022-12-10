import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      {/* <h1 className="bg-red-600 text-white">Hello Haresh</h1> */}
    </div>
  );
}

export default App;
