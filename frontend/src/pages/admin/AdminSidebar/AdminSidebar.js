import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiUser, HiArrowSmRight} from 'react-icons/hi'
import './AdminSidebar.css';

export default function AdminSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get("tab");
      if (tabFromUrl){
          setTab(tabFromUrl);
      }
  }, [location.search])

  return (
    <aside className="admin-sidebar">
      <ul className="sidebar-items">
        <li className={`sidebar-item ${tab === 'profile' ? 'active' : ''}`}>
          <Link to="/dashboard?tab=profile">
            <span className="icon"><HiUser/></span> Profile
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="">
            <span className="icon"><HiArrowSmRight/></span> Sign Out
          </Link>
        </li>
      </ul>
    </aside>
  );
}
