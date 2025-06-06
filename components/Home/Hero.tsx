"use client";
import React from "react";
import Image from "next/legacy/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import SectionHeading from "../common/SectionHeading";
import HomeDialog from "./HomeDialog";
import aamzflag from "/images/logos/AAMZ.png";
import heroPic from "/images/logos/hero1.png";


const Hero = () => {
  const isNonMobile = useMediaQuery("(min-width:900px)");

  // const logoTail = `relative flex items-center justify-center min-w-[80px] h-auto max-w-[100px] w-[15%] aspect-[1/1] object-contain drop-shadow-sm`;

  //dark:bg-slate-900/[0.8]
  
  return (
    <div className="bg-slate-100 dark:bg-black relative overflow-clip  h-fit">
      
      <div className="relative max-w-7xl  mx-auto grid grid-cols-12  h-fit">
        
        <div className="pt-12 max-[900px]:col-span-12 max-[1200px]:col-span-7 max-[10000px]:col-span-6 px-2 flex flex-col max-[900px]:items-center">
          
          <SectionHeading
            className="mb-2"
            customIcon={
              <div className=" flex items-center ">
                <Image
                  width={23}
                  height={30}
                  src={aamzflag}
                  alt="AAMZ"
                />
              </div>
            }
            title={"AAMZ Security Website"}
          />
          <div className="mt-3">
            <h1 
              className="max-[500px]:max-w-[380px] max-[1100px]:max-w-[580px] max-[4000px]:max-w-[620px] leading-tight 
              max-[500px]:text-[1.75em] max-[1100px]:text-[2.55em]  max-[1300px]:text-[3em] max-[9300px]:text-[3.25em] font-bold text-gray-900 dark:text-slate-200 max-[900px]:text-center" 
            > 
            Empowering{" "}
              <span className="text-green-500 dark:text-green-700 font-extrabold">
                Security
              </span>
              , shaping new{" "}
              <span className="text-orange-600 dark:text-orange-400 font-extrabold">
                Innovation
              </span>
              , securing the{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold"> 
                Future 
              </span> 
              . 
            </h1>
          </div>
          <br />
          
          <p className="max-w-[620px] px-1 pr-2 text-sm sm:text-base text-gray-700 dark:text-slate-400 max-[900px]:text-center">
            AAMZ Security Solutions Pvt. Ltd. is a trusted name in
            providing top-tier security services across Pakistan. Licensed by the
            Interior Ministry, we operate nationwide with a reputation for efficiency,
            reliability, and a spotless record of zero misconduct.
          </p>
          
          <br />
          <div className="flex flex-col gap-6 min-[900px]:gap-6 min-[900px]:flex-row">
          

            <HomeDialog />
            <button
              className={`flex items-center justify-center rounded-md border-2 font-semibold text-md tracking-wide border-gray-400 bg-slate-200/[0.7] 
              text-gray-700 dark:text-white/[0.8] hover:bg-slate-300 hover:border-slate-500 transition-colors select-none
              dark:border-slate-500 dark:bg-slate-700 dark:hover:bg-slate-800 dark:hover:border-slate-700`}
            >
              <Link href="/about" className="py-1.5 md:py-2 px-4 md:px-6">
                <p>Learn More</p>
              </Link>
            </button>
          </div>
        </div>
        
        {isNonMobile && (
          <div className="max-[900px]:col-span-0 max-[1200px]:col-span-5 max-[10000px]:col-span-7 sm:col-span-5">
            <div
              className="relative md:w-[700px] md:h-[500px] xl:w-[760px] xl:h-[530px] 2xl:w-[760px] 2xl:h-[530px] 
            rounded-bl-3xl overflow-clip drop-shadow-md border-b-2 border-r-2 border-l-2 border-transparent dark:border-slate-700"
            >
              <Image
                src={heroPic}
                placeholder="blur"
                layout="fill"
                alt="AAMZ Main picture"
              />
            </div>
          </div>
        )}
      </div>

      <div className="pt-[3.5rem] pb-8 text-sm sm:text-base max-w-2xl mx-auto text-center text-gray-500 dark:text-slate-400">
        <p>
          Over the past 13 years, we have proudly safeguarded leading business, 
          housing, and industrial groups, delivering on our mission with unwavering commitment
        </p>
      </div>
    </div>
  );
};

export default Hero;
