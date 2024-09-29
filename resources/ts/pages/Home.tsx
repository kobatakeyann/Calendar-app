import React from "react";
import Calendar from "../components/calendar/Calendar";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function Home() {
    return (
        <>
            <Header />
            <Sidebar />
            <Calendar />
        </>
    );
}

export default Home;
