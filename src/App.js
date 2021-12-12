import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./containers/Dashboard";
import { CountryDetail } from "./containers/CountryDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/detail" element={<CountryDetail />} />
    </Routes>
  );
}
