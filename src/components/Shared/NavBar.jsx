import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    return (
        <>
            {/*<!-- Component: Basic Navbar --> */}
            <header className="bg-black  shadow-slate-700/5 after:bg-black-200 lg:border-slate-200 lg:backdrop-blur-sm fixed top-0 w-full shadow-md z-50">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-white "
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <a
                            id="WindUI"
                            aria-label="WindUI logo"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                        >
                            {/* <img className="w-40" src={"logo"} alt="" /> */}
                            <p>Murad</p>
                        </a>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                  ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
                `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-black px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className={`cursor-pointer flex items-center gap-2 py-4 transition-colors duration-300 hover:text-gray-500 focus:bg-gray focus:outline-none focus-visible:outline-none lg:px-8" ${({ isActive }) => isActive && 'border-red-800'}`}
                                >
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    role="menuitem"
                                    aria-current="page"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="cursor-pointer flex items-center gap-2 py-4 transition-colors duration-300 hover:text-gray-600 focus:bg-gray focus:outline-none focus-visible:outline-none lg:px-8"
                                >
                                    <span>About</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="cursor-pointer flex items-center gap-2 py-4 transition-colors duration-300 hover:text-gray-500 focus:bg-gray focus:outline-none focus-visible:outline-none lg:px-8"
                                >
                                    <span>Skills</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    to="portfolio"
                                    smooth={true}
                                    duration={500}
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="cursor-pointer flex items-center gap-2 py-4 transition-colors duration-300 hover:text-gray-500 focus:bg-gray focus:outline-none focus-visible:outline-none lg:px-8"
                                >Portfolio
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    to="post"
                                    smooth={true}
                                    duration={500}
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="cursor-pointer flex items-center gap-2 py-4 transition-colors duration-300 hover:text-gray-500 focus:bg-gray focus:outline-none focus-visible:outline-none lg:px-8"
                                >Blog
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="cursor-pointer flex items-center gap-2 py-4 transition-colors duration-300 hover:text-gray-500 focus:bg-gray focus:outline-none focus-visible:outline-none lg:px-8"
                                >Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;