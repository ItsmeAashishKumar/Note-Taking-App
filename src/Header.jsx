import React from "react";

export default function Header({ darkMode, setDarkMode }) {

    function toggle() {
        setDarkMode(!darkMode);
    }

    return (
        <div className="header">
            <div className="header-content">
                <h2 className={darkMode?"dark":""}>NOTES</h2>
                <button className="toggle-btn" onClick={toggle}>Toggle Mode</button>
            </div>
        </div>
    );
}
