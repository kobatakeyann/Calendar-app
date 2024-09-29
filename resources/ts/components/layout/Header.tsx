import AppIcon from "@/assets/images/app_icon.png";
import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="header-icon-area">
                <a href="#">
                    <img
                        src={AppIcon}
                        alt="App Icon"
                        className="app-icon"
                    ></img>
                </a>
                <h1 className="header-app-title">My Calendar App</h1>
            </div>
            <nav>
                <ul className="header-factor-area">
                    <li>
                        <a href="#" className="header-text">
                            イベント
                        </a>
                    </li>
                    <li>
                        <a href="#" className="header-text">
                            お気に入り
                        </a>
                    </li>
                    <li>
                        <a href="#" className="header-text">
                            Todo管理
                        </a>
                    </li>
                    <li>
                        <a href="#" className="header-text">
                            LINE連携
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
