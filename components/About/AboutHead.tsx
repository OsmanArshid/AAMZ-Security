import React from "react";
import SectionHeading from "../common/SectionHeading";
import { Info, Target, Goal } from "lucide-react";
import objectives from "../../resources/objectives.ts";

const AboutHead = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900/[0.7] relative h-max py-12">
      <div className=" max-w-6xl mx-auto">
        
        <SectionHeading className="mb-6" 
        icon={Info} 
        title="About AAMZ Security" 
        />
        <div>
          <p
            className="text-justify px-2 sm:px-4 text-sm md:text-base
          dark:text-slate-300"
          >
            Established in 2012, AAMZ Security Solutions Pvt. Ltd. is a trusted name in
            providing top-tier security services across Pakistan. Licensed by the
            Interior Ministry, we operate nationwide with a reputation for efficiency,
            reliability, and a spotless record of zero misconduct. Over the past 13
            years, we have proudly safeguarded leading business, housing, and
            industrial groups, delivering on our mission with unwavering commitment.
          </p>
        </div>
        
        <SectionHeading className="mt-20 mb-6" 
        icon={Info} 
        title="Vision of AAMZ Security" 
        />
        <div>
          <p
            className="text-justify px-2 sm:px-4 text-sm md:text-base
          dark:text-slate-300"
          >
            At AAMZ, our vision is to be the leading provider of
            innovative and comprehensive security solutions. We aim to 
            ensure peace of mind for our clients by addressing modern
            security challenges and supporting law enforcement efforts 
            to maintain regional stability. With a commitment to
            excellence, we strive to empower businesses and communities through
            adaptable, effective security services
          </p>
        </div>


        <SectionHeading
          className="mb-4 mt-20"
          icon={Target}
          title="Core Values of AAMZ Security"
        />
        <p className="text-justify px-2 sm:px-4 text-sm md:text-base
          dark:text-slate-300"
        > 
        At AAMZ, our core values define who we
        are and guide how we operate
        </p>

        <div className="mt-10 grid grid-cols-12 ">
          {objectives.map((objective) => (
            <ObjectiveCard
              key={objective.id}
              id={objective.id}
              title={objective.title}
              desc={objective.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHead;




const ObjectiveCard = (props: any) => {
  const id = props.id
  const title = props.title
  const desc = props.desc
  return (
    <div
      key={id}
      className="col-span-12 min-[570px]:col-span-6 lg:col-span-4 
    m-2 p-4 border-2 rounded-md
    odd:border-green-200 odd:bg-green-100/[0.7]
    even:border-[#00852E]/[0.4] even:bg-green-100/[0.5]
    dark:odd:border-green-800/[0.6] dark:odd:bg-slate-800/[0.5]
    dark:even:border-green-700 dark:even:bg-slate-800"
    >
      <div className="flex">
        <Goal className="p-0.5 mr-3 text-[#00852E] font-extrabold dark:text-green-400" />
        <h3 className="text-sm sm:text-base font-medium md:font-bold mb-2">{title}</h3>
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-800 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  )
};
