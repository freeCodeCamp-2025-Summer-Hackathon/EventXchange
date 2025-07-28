import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const [user] = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full bg-darkTangerine font-bold h-[6rem] z-50 shadow-lg">
        <div className="flex items-center h-full w-full mx-auto px-5">
          {/* LEFT */}
          <div className="ml-[3rem]">
            <div className="p-2.5 bg-black">
              <h1 className="text-3xl font-chocoSans text-darkTangerine">
                <Link to="/">EventXchange</Link>
              </h1>
            </div>
          </div>

          {/* SPACER */}
          <div className="flex-grow"></div>

          {/* RIGHT (desktop) */}
          <div className="mr-[3rem]">
            <ul className="hidden sm:flex space-x-6 font-bold text-xl">
              {user && (
                <li className="transition-transform duration-50 hover:scale-102">
                  <Link to="/events">Events</Link>
                </li>
              )}
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

            {/* Hamburger Toggle Button (mobile only) */}
            <div
              className="sm:hidden text-xl font-bold cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              MENU
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-[6rem] left-0 w-full bg-darkTangerine text-black shadow-md sm:hidden">
            <ul className="flex flex-col items-start space-y-4 px-5 py-6 text-xl">
              {user && (
                <li>
                  <Link to="/events" onClick={() => setMenuOpen(false)}>
                    Events
                  </Link>
                </li>
              )}
              <li>
                <Link to="/calender" onClick={() => setMenuOpen(false)}>
                  Calender
                </Link>
              </li>
              {user && (
                <li>
                  <Link to="/logout" onClick={() => setMenuOpen(false)}>
                    Logout
                  </Link>
                </li>
              )}
              {!user && (
                <>
                  <li>
                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={() => setMenuOpen(false)}>
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
