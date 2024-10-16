import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
