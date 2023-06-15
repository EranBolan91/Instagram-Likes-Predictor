import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HOME from './pages/Home.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HOME/>}/>
      </Routes>
    </Router>
  );
}

export default App;
