import React from "react";

export default function Search({ handleSearch }) {
    function handleChange(event) {
        handleSearch(event.target.value);
    }

    return (
        <div className="search">
            <img className="search-img" src="./public/search.png" alt="Search Icon" />
            <input onChange={handleChange} type="text" placeholder="Type to search...." />
        </div>
    );
}
