import React from "react";
import Calendar from "../components/calendar/Calendar";
import Event from "../components/calendar/Event";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function Home() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className="main-contents-area">
                <Sidebar />
                <div className="calendar-area">
                    <Calendar />
                    <Event />
                </div>
            </main>
        </>
    );
}

export default Home;
