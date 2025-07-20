import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const [user] = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full bg-blue-400 text-black h-[6rem] z-50">
        <div className="flex items-center h-full w-full mx-auto px-5">
          {/* LEFT */}
          <div className="ml-[3rem]">
            <h1 className="text-3xl">
              <Link to="/">EventXchange</Link>
            </h1>
          </div>
          {/*  SPACER  */}
          <div className="flex-grow"></div>

          {/* RIGHT (desktop) */}
          <div className="mr-[3rem]">
            <ul className="hidden sm:flex space-x-6 font-bold text-xl font-hti font">
              <li className="transition-transform duration-50 hover:scale-102">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="transition-transform duration-50 hover:scale-102">
                <Link to="/events">Events</Link>
              </li>
              <li className="transition-transform duration-50 hover:scale-102">
                <Link to="/calender">Calender</Link>
              </li>
              {user && (
                <li className="transition-transform duration-50 hover:scale-102">
                  <Link to="/logout">Logout</Link>
                </li>
              )}
              {!user && (
                <>
                  <li className="transition-transform duration-50 hover:scale-102">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="transition-transform duration-50 hover:scale-102">
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
            <div></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
