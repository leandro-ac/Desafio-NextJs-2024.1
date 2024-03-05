// SearchBar.jsx

import React, { useState, ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        placeholder="Buscar membro..."
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-fuchsia-600 text-white hover:bg-fuchsia-700 cursor-pointer"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
