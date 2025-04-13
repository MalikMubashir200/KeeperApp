import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t absolute bottom-0 right-0 left-0 border-gray-200 py-4 text-center">
      <p className="text-gray-500">&copy; {year} Take Keeper</p>
    </footer>
  );
}

export default Footer;