import React from "react";
import { useUserContext } from "@/context/UserProvider";
import Image from "next/image";
import logo from "@/styles/assets/Logo.svg";
import Link from "next/link";

const Header = () => {
  const navItems = ["Categories", "For Business", "Events", "Get a Quote"];
  const { state } = useUserContext();
  const user = state.user;

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white px-6">
      <div className="flex">
        <Link href="/" className="flex justify-center items-center">
          <Image className="bg-gray-800" src={logo} width={80} alt="Logo" />
        </Link>
        <nav>
          {/* Navigation bar */}
          <ul className="flex">
            {navItems.map((item, index) => {
              return (
                <div key={index} className="px-4">
                  <li className="font-medium px-4 py-2">{item}</li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
      {user && (
        <div className="flex space-x-2">
          <button className="border-2 border-gray-500 rounded-md font-medium text-sm px-2 py-1">
            <Link href="/login">Log in</Link>
          </button>
          <button className="border-2 border-white bg-green-600 rounded-md font-medium text-sm px-2 py-1">
            <Link href="/sign-up">Sign up</Link>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
