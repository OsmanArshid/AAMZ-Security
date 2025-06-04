import FootContent from "./FootContent";

const Footer = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.921098011534!2d74.3861349098966!3d31.471356574128944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919073f281e7013%3A0x95570562397759aa!2sAAMZ%20Security%20Solutions!5e0!3m2!1sen!2sus!4v1748465580654!5m2!1sen!2sus"
  
  return (
    <footer className=" border-t border-[rgba(87,199,133,1)] dark:border-[rgba(0,133,46,1)]/[0.7] bg-slate-100 dark:bg-slate-900/[0.8]">
      <div className="max-w-7xl mx-auto py-4 pb-6 flex flex-wrap items-center justify-center gap-1 sm:gap-4">
        <iframe
          className={`h-72 lg:h-[26rem] rounded-sm sm:rounded-md m-2 border-2 border-[rgba(87,199,133,1)] dark:border-[rgba(0,133,46,1)] 
          min-w-[300px]  drop-shadow-sm dark:drop-shadow-none select-none`}
          src={mapSrc}
          width="600"
          loading="lazy"
        />
        <FootContent />
      </div>
      <div
        className="text-xs py-1 pb-2 border-t border-[rgba(87,199,133,1)] dark:border-[rgba(0,133,46,1)]/[0.8] text-center 
        text-slate-600 dark:text-slate-500 bg-white dark:bg-slate-950"
      >
        Copyright © 2025 {" "}
          <a
            href="https://juvoucreative.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c4a571] dark:text-[#e5c185] hover:underline"
          >
          JuvoU</a>
          {" "}
        (
        <a
          href="https://github.com/OsmanArshid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 dark:text-cyan-400 hover:underline"
        >
          OsmanArshid
        </a>
        )

      </div>
    </footer>
  );
};

export default Footer;
