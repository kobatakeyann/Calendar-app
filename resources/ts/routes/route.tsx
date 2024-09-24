import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "../components/Example";
import Home from "../components/Home";

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
