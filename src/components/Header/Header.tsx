import React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <header className="bg-slate-900">
      <div className="container mx-auto py-5">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl text-white font-bold">URL Shortener</h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;
