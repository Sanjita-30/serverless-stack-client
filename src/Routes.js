import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
export default function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      {/* Finally, catch all unmatched routes */}
      <Route exact path="*" element={<NotFound/>} />


    </Routes>
  
  );
}
