"use client";

import React from "react";
import { Menu, Moon, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/product",
  },
  {
    name: "Cart",
    href: "#",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-white pb-6">
        <div className='h-[40px] flex justify-center bg-[rgb(2,20,49)] text-[#C7C9D1]'>
            <span className='w-[400px] md:w-[670px] lg:w-[1000px] flex justify-end items-center gap-5 text-[14px]'>
                    <p className='hover:cursor-pointer'><Link to="/signin">Sign in / Guest</Link></p>
                    <p className='hover:cursor-pointer'><Link to="/signup">Create Account</Link></p>
            </span>
        </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
       <Link to="/">
       <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-xl">Comfy</span>
        </div>
       </Link>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href}>
                  <p className="text-sm font-semibold text-gray-800 hover:text-gray-900">
                    {" "}
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block ">
          <button className="mx-4">
            <Moon size={20} strokeWidth={1.25} />
          </button>
          <button>
            {" "}
            <ShoppingCart size={20} strokeWidth={1.5} />{" "}
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold text-xl">Comfy</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
