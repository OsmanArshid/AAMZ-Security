import React, { useState } from 'react';
import { Shield, Building, Home, User, Calendar, Lightbulb, Target } from 'lucide-react';
import services from '@/resources/services';


// get icon component
const getIconComponent = (iconName) => {
  const iconMap = {
    Building, Home, User, Calendar, Lightbulb, Target, Shield
  };
  return iconMap[iconName] || Shield;
};


// SectionHeading component
const SectionHeading = ({ iconName, title, className = "" }) => {
  const IconComponent = getIconComponent(iconName);
  return (
    <div className={`flex items-center justify-center mb-8 ${className}`}>
      <IconComponent className="w-8 h-8 mr-3 text-[#00852E] dark:text-green-400" />
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
        {title}
      </h2>
    </div>
  );
};



// SubHeading component
const SubHeading = ({ iconName, title }) => {
  const IconComponent = getIconComponent(iconName);

  return (
    <div className="flex items-center mb-2">
      <IconComponent className="p-1 mr-2 pl-0 text-[#00852E] dark:text-green-300/70" />
      <h4 className="text-base font-bold text-[#00852E] dark:text-green-300/70">{title}</h4>
    </div>
  );
};



// Service Button Component
const ServiceButton = ({ id, title, iconName, active, onClick }) => {
  const IconComponent = getIconComponent(iconName);
  
  return (
    <button
      className={`border rounded-md col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 xl:col-span-2 flex flex-col items-center px-4 py-3 transition-colors select-none cursor-pointer ${
        active 
          ? 'bg-green-200/80 dark:bg-slate-800/90 text-green-950 dark:text-slate-100 border-green-300 dark:border-slate-700'
          : ''
      }`}
      onClick={() => onClick(id)}
    >
      <IconComponent 
        className={`mb-2 ${
          active 
            ? 'text-[#00852E] dark:text-green-400' 
            : 'text-green-900/50 dark:text-green-300/50'
        }`} 
        size={24} 
      />
      <h4 className={`text-center text-sm ${
        active 
          ? 'font-bold text-[#00852E] dark:text-green-400' 
          : 'font-medium text-green-900/80 dark:text-slate-200/80'
      }`}>
        {title}
      </h4>
    </button>
  );
};


// Service Card Component
const ServiceCard = ({ id, title, shortTitle, desc, iconName, features, active }) => {
  const IconComponent = getIconComponent(iconName);

  if (!active) return null;

  return (
    <div className="border-2 rounded-md p-6 bg-green-100 dark:bg-slate-900 dark:border-slate-800 opacity-100 transition-opacity duration-500">
      <div className="flex flex-col min-[460px]:flex-row items-start min-[460px]:items-center gap-3 mb-4 pl-2 pb-4 border-b border-green-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <IconComponent className="text-[#00852E] dark:text-green-400" size={28} />
          <p className="w-fit px-3 py-1 rounded-lg text-base font-bold border border-green-400 dark:border-green-600 bg-green-200 dark:bg-green-900 text-green-950 dark:text-green-200">
            {shortTitle}
          </p>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-green-900 dark:text-green-200">{title}</h3>
      </div>
      
      <SubHeading iconName="Target" title="Service Description" />
      <p className="pl-2 text-sm sm:text-base dark:text-slate-300 mb-4">{desc}</p>
      
      <div className="flex flex-col">
        <SubHeading iconName="Shield" title="Key Features" />
        <ul className="list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index} className="pl-2 text-sm sm:text-base dark:text-slate-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};




// Main Services Component
const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <>      
      <div className="relative h-max py-12 pb-16">
        <div className="max-w-6xl mx-auto">
          
          <SectionHeading 
            iconName="Shield"
            title="Security Services" 
            className="mb-4" 
          />
          
          <div className="grid grid-cols-12 gap-0 lg:gap-8">
            <div className="col-span-12 md:col-span-5 p-4 flex flex-col gap-4">
              
              <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold">
                Comprehensive{" "}
                <span className="font-extrabold text-[#00852E] dark:text-green-600">
                  Security
                </span>{" "}
                Solutions
              </h3>
              
              <p className="text-base dark:text-slate-400">
                At AAMZ Security, we provide a full spectrum of security services 
                tailored to meet the diverse needs of our clients. From industrial 
                protection to personal security, our expert team delivers reliable 
                and professional solutions across Pakistan.
              </p>
              
              <div className="mt-6 gap-4 grid grid-cols-6">
                {services.map((service, index) => (
                  <ServiceButton
                    key={service.id}
                    id={index}
                    title={service.shortTitle}
                    iconName={service.icon}
                    active={active === index}
                    onClick={setActive}
                  />
                ))}
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-7 p-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  shortTitle={service.shortTitle}
                  desc={service.desc}
                  iconName={service.icon}
                  features={service.features}
                  active={active === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;