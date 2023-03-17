import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FileSystemNavigator from './components/FileSystemNavigator';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/customers/:id"
          element={<FileSystemNavigator />}
        />
      </Routes>
    </Router>
  );
}

export default App;
