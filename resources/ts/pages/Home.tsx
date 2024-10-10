import styles from "@/ts/pages/home.module.css";
import React from "react";
import Calendar from "@/ts/components/calendar";
import Header from "../components/header/Header";
// import Sidebar from "../components/sidebar/Sidebar";

function Home() {
    return (
        <div className={styles.mainContentsArea}>
            <Header />
            <div className={styles.parent}>
                <div>sidebar</div>
                <div className={styles.calendarArea}>
                    <Calendar />
                </div>
            </div>
        </div>
    );
}

export default Home;
