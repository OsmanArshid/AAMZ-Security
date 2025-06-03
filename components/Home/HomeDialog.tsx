import React from "react";

const HomeDialog = () => {
  const handleStartJourney = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
<button
  onClick={handleStartJourney}
  className={`py-1.5 px-4 md:py-2 sm:px-6 rounded-md border border-green-800 dark:border-[#00852E] text-white
      hover:border-[#00852E] hover:dark:border-green-400 transition-colors select-none
      font-medium text-lg [word-spacing:2px] font-sans hover:opacity-90`}
  style={{
    background:
      "linear-gradient(180deg, rgba(0,133,46,1) 0%, rgba(87,199,133,1) 40%, rgba(0,0,0,1) 100%)",
  }}
  >
    <p className="drop-shadow-[1px_2px_1px_rgba(0,0,0,0.5)]">
      Start your Journey
    </p>
  </button>
  );
};

export default HomeDialog;