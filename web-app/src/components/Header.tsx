import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold">Crypto Price Tracker</h1>
        <p className="text-sm opacity-75">Track live cryptocurrency prices</p>
      </div>
    </header>
  );
};

export default Header;