import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Contect from "./Contect";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Settings from "./Setting";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contect" element={<Contect/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  </BrowserRouter>
);
