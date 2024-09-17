import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import AdminProfile from "./AdminProfile/AdminProfile";

import './AdminPanel.css'
import DashPosts from "./DashPosts";

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
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="md:w-56">
                <AdminSidebar />
            </div>
            {tab === 'profile' && <AdminProfile />}
            {tab === 'posts' && <DashPosts />}
        </div>
    )
}