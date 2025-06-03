"use client";
import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { Tent,} from "lucide-react";
import camps from "../../resources/camps";
import { CampButton, CampCard } from "./CampComps";

const AboutCamp = () => {
  const [active, setActive] = useState(0);
  return (
    <> 
      <div className="text-xs py-1 pb-2 border-t border-[rgba(87,199,133,1)] dark:border-[rgba(0,133,46,1)]/[0.8] text-center 
      text-slate-600 dark:text-slate-500 bg-white dark:bg-slate-950"
      ></div>

      <div className=" relative h-max py-12 pb-16">
        
        <div className=" max-w-6xl mx-auto">
          
          <SectionHeading icon={Tent} title="Hiring and Training at AAMZ Security" className={"mb-4"} />
          
          <div className="grid grid-cols-12 gap-0 lg:gap-8">
            <div className="col-span-12 md:col-span-5 p-4 flex flex-col gap-2 lg:gap-4">
              <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold">
                Unlocking{" "}
                <span className="font-extrabold text-[#00852E] dark:text-green-600">
                  Extraordinary
                </span>{" "}
                Experiences
              </h3>
              
              <p className="text-base dark:text-slate-400">
                In the AAMZ Security Hiring and Training Program, we select only the best
                candidates who are dedicated to excellence. Each session we offer a unique
                opportunity for you to embark on a transformative journey of
                personal and professional growth in the dynamic world of security.
              </p>

              <ul className="gap-3 mt-2 grid grid-cols-6">
                {camps.map((camp: any, index: number) => (
                  <CampButton
                    key={camp.id}
                    id={camp.id}
                    title={camp.shortTitle}
                    active={active === index}
                    onClick={setActive}
                  />
                ))}
              </ul>

            </div>
            <div className="col-span-12 md:col-span-7 p-4">
              <ul>
                {camps.map((camp: any, index: number) => (
                  <CampCard
                    key={camp.id}
                    active={active === index}
                    title={camp.title}
                    shortTitle={camp.shortTitle}
                    desc={camp.desc}
                    activities={camp.activities}
                  />
                ))}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCamp;
