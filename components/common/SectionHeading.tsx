import React from "react";

const SectionHeading = (props: any) => {
  const className = props.className;
  const customIcon = props.customIcon;
  const IconComponent = props.icon;
  const title = props.title;
  const iconTail = `p-1.5 w-7 h-7 mr-1.5 rounded-md border border-green-200 dark:border-green-200  
  bg-[rgba(87,199,133,1)] dark:bg-green-400 dark:text-black`;
  return (
    <div
      className={`w-fit flex items-center ml-1.5 px-1 pb-3 border-b-2 ${className}`}
    >
      <div className=" mr-2 flex items-center ">
        {customIcon ? customIcon : <IconComponent className={iconTail} />}
      </div>
      <h2 className="text-sm tracking-wide font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeading;
