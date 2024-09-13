// src/layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
// Import other admin-specific components if needed

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className='App'>
        <Outlet />
      </div>
      {/* Include admin-specific footer or other components if necessary */}
    </>
  );
};

export default AdminLayout;
