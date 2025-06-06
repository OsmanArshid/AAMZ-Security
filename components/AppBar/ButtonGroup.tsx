"use client";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import React from "react";
import { AppStateContext } from "../utils/AppStateContext";

const ButtonGroup = (props: any) => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  useEffect(() => {
    setIsDomLoaded(true);
  }, [isDomLoaded]);
  // Context
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;

  // Tailwind CSS
  const dividerTail = `min-h-[1em] w-px self-stretch  bg-green-400 dark:bg-slate-700 select-none`;
  const commonTail = ` py-1 px-4 lg:px-5 text-md  select-none  transition-colors`;
  const buttonTail = `bg-slate-50 dark:bg-slate-950 font-semibold dark:hover:bg-[#2d5433] hover:bg-[rgba(87,199,133,1)] ${commonTail}`;
  const activeTail = `bg-[rgba(87,199,133,1)] dark:bg-[#2d5433] font-bold ${commonTail}`;

  // Render
  if (!isDomLoaded) return <nav></nav>;
  return (
    <nav className="flex items-center rounded-md border border-green-400 dark:border-green-700 overflow-hidden">
      
      <Link
        href={"/"}
        className={activePage === "home" ? activeTail : buttonTail}
      >
        Home
      </Link>

      <div className={dividerTail} />
      
      <Link
        href={"/about"}
        className={activePage === "about" ? activeTail : buttonTail}
      >
        About
      </Link>

      <div className={dividerTail} />
      
      <Link
        href={"/services"}
        className={activePage === "services" ? activeTail : buttonTail}
      >
        Services
      </Link>


      {/* <Link
        href={"/events"}
        className={activePage === "events" ? activeTail : buttonTail}
      >
        Events
      </Link>
      <div className={dividerTail} />
      <Link
        href={"/gallery"}
        className={activePage === "gallery" ? activeTail : buttonTail}
      >
        Gallery
      </Link> */}
    </nav>
  );
};

export default ButtonGroup;
