// src/layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../pages/admin/AdminNavbar';
// Import other admin-specific components if needed

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className='App'>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
