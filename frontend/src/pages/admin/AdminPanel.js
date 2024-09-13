import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import AdminProfile from "./AdminProfile/AdminProfile";

import './AdminPanel.css'

export default function AdminPanel() {
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
        <div className="dashboard-container">
            <div >
                <AdminSidebar />
            </div>
            {tab === 'profile' && <AdminProfile />}
        </div>
    )
}