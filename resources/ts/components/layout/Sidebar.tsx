import React from "react";

export default function Sidebar() {
    return (
        <aside className="sidebar-area">
            <div className="header-text">I'm Sidebar component!</div>
            <h2>Schedule</h2>
            <ul>
                <li>新規作成</li>
                <li>編集</li>
                <li>削除</li>
            </ul>
            <h2>TodoList</h2>
            <ul>
                <li>一覧</li>
                <li>追加</li>
            </ul>
            <h2>Settings</h2>
            <ul>
                <li>テーマ</li>
                <li>通知</li>
                <li>hoge</li>
            </ul>
            <h2>Settings</h2>
            <ul>
                <li>テーマ</li>
                <li>通知</li>
                <li>hoge</li>
            </ul>
            <h2>Settings</h2>
            <ul>
                <li>テーマ</li>
                <li>通知</li>
                <li>hoge</li>
            </ul>
        </aside>
    );
}
