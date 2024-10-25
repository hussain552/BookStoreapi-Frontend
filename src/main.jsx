import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout.jsx";
import AuthProvider, { useAuth } from "./context/AuthProvider.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home.jsx";
import AboutUs from "./components/About.jsx";
import Course from "./components/Course.jsx";
import ContactUS from "./components/ContactUS.jsx";
import Signup from "./components/Signup.jsx";

const AppRoutes = () => {
  const [authUser, setAuthUser] = useAuth();// Move this hook call inside a component

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} /> {/* Default route for '/' */}
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUS/>} />

        {/* Conditionally render Course based on auth status */}
        <Route
          path="course"
          element={authUser ? <Course /> : <Navigate to="/signup" />}
        />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
      <AppRoutes />
      <Toaster /> {/* Add Toaster here if needed */}
      
    </AuthProvider>
  </React.StrictMode>
);
