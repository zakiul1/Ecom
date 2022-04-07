import React from "react";
import Layouts from "./pages/Layouts";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer  ${token}` : "";
  return config;
});

function App() {
  const login = localStorage.getItem("auth_token");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route
            path="registation"
            element={login ? <Navigate to="/" replace /> : <Register />}
          />
          <Route
            path="login"
            element={login ? <Navigate to="/" replace /> : <Login />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
