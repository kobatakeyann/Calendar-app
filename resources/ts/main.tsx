import Home from "@/ts/pages/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
