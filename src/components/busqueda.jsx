import React, { useState } from "react";

const SearchBar = ({ placeholder = "Buscar...", onSearch = () => { } }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="w-full max-w-md mx-auto mb-6 border-2 border-black p-2 rounded-lg">
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-2.5">
                    <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;