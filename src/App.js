import logo from './logo.svg';
import './App.css';

import Footer from './Components/Shared/Footer/Footer';
import { Routes } from 'react-router-dom';
import Header from './Components/Shared/Navbar/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
