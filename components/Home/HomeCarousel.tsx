// import TooltipElement from "@/components/common/TooltipElement";
// import { Pause, Play, StepForward, StepBack } from "lucide-react";
// import { forwardRef, useState } from "react";
// import Image from "next/legacy/image";
// import { useMediaQuery } from "@mui/material";
// import { heroCarousel } from "@/resources/hero";
// import Carousel from "react-multi-carousel";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { controlTail } from "../common/tailwindCSS";

"use client";
import Quote from "@/components/common/Quote";

/* eslint-disable react/display-name */
HomeCarousel.displayName = "HomeCarousel";
export default function HomeCarousel() {
  return (
    <div
      className="text-xs py-1 pb-2 border-t border-[rgba(87,199,133,1)] dark:border-[rgba(0,133,46,1)]/[0.8] text-center 
      text-slate-600 dark:text-slate-500 bg-white dark:bg-slate-950"
    >
    <div className="max-w-6xl mx-auto mt-8">
      <div className="p-0 md:p-2">
        <Quote>
        <span className="text-green-200 font-bold drop-shadow-sm">Concern</span>,{" "}
          <span className="text-blue-800 dark:text-blue-400 font-bold">
            Quality
          </span>
          ,{" "}
          <span className="text-sky-400 dark:text-sky-400 font-bold">Ethics</span>
          &nbsp;:&nbsp; The Strength of Our Serving
        </Quote>

        {/* <div className="md:rounded-md border border-gray-400 dark:border-slate-700">
          <MultiCarousel />
        </div> */}
      </div>
    </div>
  </div>
  );
}

// const MultiCarousel = (props: any) => {
//   const isMobile = useMediaQuery("(max-width: 768px)");
//   const imgTail = `relative md:rounded-sm overflow-hidden select-none pointer-events-none`;
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 2400 },
//       items: 1,
//     },
//     desktop: {
//       breakpoint: { max: 2400, min: 768 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 768, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   const [autoplay, setAutoplay] = useState(true);

//   const handleAutoplayClick = () => {
//     setAutoplay(autoplay ? false : true);
//   };

//   return (
//     <div className="m:0.5 md:m-1.5 relative">
//       {!isMobile && (
//         <div
//           aria-label="Carousel Controls"
//           className=" absolute z-10 rounded-sm 
//         -bottom-8 left-1/2 transform -translate-x-1/2 md:top-2.5 md:bottom-auto md:left-auto md:right-2.5 md:translate-x-0"
//         >
//           {autoplay ? (
//             <TooltipElement
//               element={
//                 <button
//                   aria-label="Play/Pause button"
//                   className={`${controlTail}`}
//                   onClick={handleAutoplayClick}
//                 >
//                   <Pause />
//                 </button>
//               }
//               tooltip={"Pause Autoplay"}
//             />
//           ) : (
//             <TooltipElement
//               element={
//                 <button
//                   aria-label="Play/Pause button"
//                   className={`${controlTail}`}
//                   onClick={handleAutoplayClick}
//                 >
//                   <Play />
//                 </button>
//               }
//               tooltip={"Play Autoplay"}
//             />
//           )}
//         </div>
//       )}
//       <Carousel
//         responsive={responsive}
//         partialVisbile={false}
//         autoPlay={!isMobile ? autoplay : false}
//         ssr
//         infinite
//         customLeftArrow={<CustomArrow direction="left" />}
//         customRightArrow={<CustomArrow direction="right" />}
//         removeArrowOnDeviceType={[]}
//         className="max-w-6xl md:rounded-md overflow-hidden"
//       >
//         {heroCarousel.map((image: any, index: number) => (
//           <div key={index} className="p-0.5 ">
//             <AspectRatio ratio={30 / 13} className={imgTail}>
//               <Image
//                 src={image.src}
//                 layout="fill"
//                 blurDataURL={image.src.replace("images", "min_images")}
//                 placeholder="blur"
//                 alt={image.alt}
//                 quality={100}
//               />
//             </AspectRatio>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// const CustomArrow = forwardRef(({ onClick, direction, ...rest }: any, ref) => {
//   const buttonTail = `absolute z-10 rounded-md  ${
//     direction === "left" ? "left-2.5" : "right-2.5"
//   } h-fit w-fit 
//   top-1/2 transform -translate-y-1/2
//   ${controlTail}`;
//   return (
//     <div>
//       {direction === "left" ? (
//         <TooltipElement
//           element={
//             <button onClick={onClick} className={buttonTail}>
//               <StepBack />
//             </button>
//           }
//           tooltip={"Previous"}
//         />
//       ) : (
//         <TooltipElement
//           element={
//             <button onClick={onClick} className={buttonTail}>
//               <StepForward />
//             </button>
//           }
//           tooltip={"Next"}
//         />
//       )}
//     </div>
//   );
// });
