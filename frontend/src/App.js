import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import Post from './components/Post';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='App'>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/blog' Component={Blog} />
          <Route path='/contact' Component={Contact} />
          <Route path='/services' Component={Services} />
          <Route path='/portfolio' Component={Portfolio} />
          <Route path='/about' Component={About} />
          <Route path='/admin' Component={AdminPanel} />
          <Route path='/post/:id' Component={Post} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
