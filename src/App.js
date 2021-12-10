import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./containers/Dashboard";
import { CountryDetail } from "./containers/CountryDetail";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail" element={<CountryDetail />} />
        </Routes>
    </Router>
  );
}
