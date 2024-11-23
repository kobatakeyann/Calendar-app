import AppIcon from "@/assets/images/app_icon.png";
import styles from "@/ts/components/header/header.module.css";
import { fetchUserName } from "@/ts/services/api/api";
import React, { useEffect, useState } from "react";

function Header() {
  const handleMenuClick = () => {
    alert("現在開発中です((__)");
  };
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchCurrentUserName = async () => {
      const userName = await fetchUserName();
      setUserName(userName);
    };
    fetchCurrentUserName();
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.headerElementArea}>
        <div className={styles.headerIconArea}>
          <a
            href="/"
            className={styles.appTitleLink}
          >
            <img
              src={AppIcon}
              alt="App Icon"
              className={styles.appIcon}
            ></img>
          </a>
          <a
            href="/"
            className={styles.appTitleLink}
          >
            <p className={styles.headerAppTitle}>My Calendar App</p>
          </a>
        </div>
        <nav>
          <ul className={styles.headerFactorArea}>
            <li>
              <a
                href="/"
                className={styles.headerText}
                onClick={handleMenuClick}
              >
                イベント
              </a>
            </li>
            <li>
              <a
                href="/"
                className={styles.headerText}
                onClick={handleMenuClick}
              >
                お気に入り
              </a>
            </li>
            <li>
              <a
                href="/"
                className={styles.headerText}
                onClick={handleMenuClick}
              >
                Todo管理
              </a>
            </li>
            <li>
              <a
                href="/"
                className={styles.headerText}
                onClick={handleMenuClick}
              >
                LINE連携
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerUserArea}>
        <p className={styles.userName}>🎀 {userName} さん</p>
        <button className={styles.logoutButton}>Sign Out</button>
      </div>
    </header>
  );
}

export default Header;
