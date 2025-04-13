import React from 'react';
import HighlightIcon from "@mui/icons-material/Highlight";


function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold"><HighlightIcon className='mb-2'/>Take Keeper</h1>
      </div>
    </header>
  );
}

export default Header;