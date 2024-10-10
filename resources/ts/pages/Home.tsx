import styles from "@/ts/pages/home.module.css";
import React from "react";
import Calendar from "../components/calendar/Calendar";
import Event from "../components/calendar/Event";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
    return (
        <>
            <Header />
            <main className={styles.mainContentsArea}>
                <Sidebar />
                <div className={styles.calendarArea}>
                    <Calendar />
                    <Event />
                </div>
            </main>
        </>
    );
}

export default Home;
