// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTo';
import NavbarComponent from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <div className='App'>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
