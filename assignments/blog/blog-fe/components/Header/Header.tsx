import React from "react";

const Header = () => {
  return (
    <header className="md:flex md:align-center md:justify-between bg-slate-900 text-blue-200 hover:text-white duration-500 p-5 shadow">
      <div className="md:flex md:align-center md:gap-10">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img
            className="inline h-8 pr-2"
            src="/assets/images/logo.png"
            alt="logo"
          />
          BLOGS
        </span>
        <div></div>
      </div>
      <div>
        
      </div>
    </header>
  );
};

export default Header;
