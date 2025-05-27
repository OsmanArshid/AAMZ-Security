"use client";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import Image from "next/legacy/image";
import { AppStateContext } from "../utils/AppStateContext";
import { useMediaQuery } from "@mui/material";
import aamzflag from "/images/logos/AAMZ.png";

const LogoTitle = () => {
  const pageTitleToggle = useMediaQuery("(min-width: 900px)");

  // Context
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;
  
  const handleNavItemClick = (page: string) => {
    setActivePage(page);
  };
  
  return (
<Link
  href="/"
  className="relative group flex py-1.5 px-3 rounded-md items-center cursor-pointer border border-transparent transition-colors"
  onClick={() => {
    handleNavItemClick("home");
  }}
>
  {/* Gradient hover background that replaces both light and dark default hover colors */}
  <div
    className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity -z-10"
    style={{
      background:
        "linear-gradient(180deg, rgba(0,133,46,1) 0%, rgba(87,199,133,1) 40%, rgba(0,0,0,1) 100%)",
    }}
  />

  {/* Logo */}
  <div className="h-8 mr-4">
    <Image width={28} height={37} src={aamzflag} alt="AAMZ logo" />
  </div>

  {/* Title */}
  <h1 className="h-6 text-lg font-extrabold dark:font-bold">
    {pageTitleToggle ? `AAMZ Security Solutions` : `AAMZ SS`}
  </h1>
</Link>
  );
};

export default LogoTitle;
