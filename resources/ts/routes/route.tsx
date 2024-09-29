import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "../pages/Example";
import Home from "../pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
