import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPanel from './pages/admin/AdminPanel';
import Post from './components/Post';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import SignIn from './pages/admin/SignIn';
import SignUp from './pages/admin/SignUp';

import './App.css';
import ScrollToTop from './components/ScrollToTo';

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
          <Route path='/sign-in' Component={SignIn} />
          <Route path='/sign-up' Component={SignUp} />
          <Route path='/admin' Component={AdminPanel} />
          <Route path='/post/:id' Component={Post} />
        </Routes>
        
      </div>
      <Footer />
      <ScrollToTop/>
    </Router>
  );
}

export default App;
