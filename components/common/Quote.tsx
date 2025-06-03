import React from "react";

const Quote = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full pb-6 pt-4">
      <blockquote className="relative overflow-hidden w-fit mx-auto px-6 min-[330px]:px-8 py-4 sm:py-6 md:px-12 rounded-2xl text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
        {children}

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
      </blockquote>
    </div>
  )
}

export default Quote;
