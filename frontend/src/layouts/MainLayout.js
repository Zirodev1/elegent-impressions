// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTo';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
