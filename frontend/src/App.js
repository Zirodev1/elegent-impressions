import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/admin/AdminPanel";
import Post from "./components/Post";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import SignIn from "./pages/admin/SignIn";
import SignUp from "./pages/admin/SignUp";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePosts from "./pages/admin/CreatePosts";
import UpdatePosts from "./pages/admin/UpdatePost";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout */}
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/post/:postSlug" element={<Post />} />
        </Route>

        {/* Admin layout */}
        <Route element={<PrivateRoute/>}>
          <Route element={<AdminLayout />}>
            <Route index path="/dashboard" element={<AdminPanel />} />
          </Route>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route element={<AdminLayout />}>
            <Route index path="/create-post" element={<CreatePosts />} />
            <Route index path="/update-post/:postId" element={<UpdatePosts />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
