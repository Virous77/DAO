import React from "react";

const Header = () => {
  return (
    <nav className=" sticky top-0 left-0 w-full p-2 bg-card shadow-md z-10">
      <ul className=" flex items-center justify-between">
        <li className="tracking-wider text-xl">DAO</li>
        <li>
          <button className=" bg-primary text-secondary rounded-full px-4 py-2 hover:opacity-90 transition duration-300 ease-in-out">
            Connect Wallet
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
