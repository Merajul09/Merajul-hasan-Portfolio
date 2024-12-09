import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Blog", to: "post" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="bg-black shadow-md fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-evenly h-[5.5rem] text-white">
          <div>
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden h-10 w-10 flex items-center justify-center"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-label="Toggle navigation"
            >
              <div
                className={`transition-all duration-300 ${
                  isToggleOpen ? "rotate-45" : ""
                }`}
              >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span
                  className={`block w-6 h-0.5 bg-white ${
                    isToggleOpen ? "hidden" : "block"
                  }`}
                ></span>
                <span className="block w-6 h-0.5 bg-white mt-1"></span>
              </div>
            </button>

            {/* Logo */}
            <a href="/" className="text-lg font-semibold">
              Murad
            </a>
          </div>

          {/* Navigation Links */}
          <ul
            className={`lg:flex lg:items-center lg:justify-center lg:static absolute top-full left-0 w-full bg-black lg:bg-transparent transition-transform duration-300 lg:translate-x-0 ${
              isToggleOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.to} className="py-4 lg:py-0 lg:px-6">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-500 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
