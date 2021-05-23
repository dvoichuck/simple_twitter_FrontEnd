import React from "react";
import './search-panel.css';

const SearchPanel = () => {
    return (
            <input
                className="form-control SearchInput"
                type="text"
                placeholder="Введите запись"
            />
    )
}

export default SearchPanel