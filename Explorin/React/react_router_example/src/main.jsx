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
      <Route index element={<App />} />
      {/* <Route path="/test" element={<div>This  is a path</div>} />
      <Route path="/contect" element={<Contect />} >
      </Route> */}

      <Route path="dashboard" >
        <Route index element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="socials" element={<p>ocialsd</p>} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>

    </Routes>
  </BrowserRouter>
);
