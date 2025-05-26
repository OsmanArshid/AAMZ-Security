import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold dark:text-zinc-300 dark:hover:text-white text-[#21314f] hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold dark:text-zinc-300 dark:hover:text-white text-[#21314f] hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold dark:text-zinc-300 dark:hover:text-white text-[#21314f] hover:text-blue-900" smooth to="/#portfolio">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold dark:text-zinc-300 dark:hover:text-white text-[#21314f] hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-[#21314f] hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our Projects
            </HashLink>
        </>
    )
}

export default NavLinks;
