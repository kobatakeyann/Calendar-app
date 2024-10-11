import Calendar from "@/ts/components/calendar";
import styles from "@/ts/pages/home/home.module.css";
import React from "react";
import Header from "../../components/header/Header";

function Home() {
    return (
        <div className={styles.mainContentsArea}>
            <Header />
            <div className={styles.parent}>
                <div className={styles.calendarArea}>
                    <Calendar />
                </div>
            </div>
        </div>
    );
}

export default Home;
