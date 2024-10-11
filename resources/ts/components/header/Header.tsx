import AppIcon from "@/assets/images/app_icon.png";
import styles from "@/ts/components/header/header.module.css";
import React from "react";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerIconArea}>
                <a href="#" className={styles.appTitleLink}>
                    <img
                        src={AppIcon}
                        alt="App Icon"
                        className={styles.appIcon}
                    ></img>
                </a>
                <a href="#" className={styles.appTitleLink}>
                    <p className={styles.headerAppTitle}>My Calendar App</p>
                </a>
            </div>
            <nav>
                <ul className={styles.headerFactorArea}>
                    <li>
                        <a href="#" className={styles.headerText}>
                            イベント
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.headerText}>
                            お気に入り
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.headerText}>
                            Todo管理
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.headerText}>
                            LINE連携
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
