import AppIcon from "@/assets/images/app_icon.png";
import React from "react";

export default function Header() {
    return (
        <div className="header">
            <div className="header-icon-area">
                <a href="#">
                    <img
                        src={AppIcon}
                        alt="App Icon"
                        className="app-icon"
                    ></img>
                </a>
                <a href="#" className="link">
                    <h1 className="header-app-title">My Calendar App</h1>
                </a>
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
        </div>
    );
}
