import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Profiles from "./pages/Profiles";
import Search from "./pages/Search";
import "./App.css";
import Base from "./pages/Base";
const App = () => {
  console.log("App is rendered");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
