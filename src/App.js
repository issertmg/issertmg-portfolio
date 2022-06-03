import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

const appStyle = {
  textAlign:"center"
}

function App() {
  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>

        <Footer/>
      </BrowserRouter>

    </div>
  );
}

// JSX (JavaScript XML)

export default App;
