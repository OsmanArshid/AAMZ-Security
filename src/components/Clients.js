import React from 'react';

const Clients = () => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 py-12">
      <section data-aos="fade-up">
        <div className="my-3 py-4">
          <h2 className="text-center text-3xl text-[#21314f] dark:text-gray-100 uppercase font-bold">
            Reviews
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900 dark:border-blue-500"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-[#21314f] dark:text-white">
            Some of our clients have something to say
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 lg:px-16"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col justify-between rounded-r-xl">
            <p className="text-lg italic text-gray-700 dark:text-gray-300">
              "I highly recommend AI Takeover for any project requiring advanced machine learning expertise and look forward to the opportunity to work with them again in the future. Thank you, AI Takeover, for your excellent work!"
            </p>
            <p className="mt-4 text-right text-gray-500 dark:text-gray-400 font-semibold">
              - Nicolas Weidman, Switzerland
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col justify-between">
            <p className="text-lg italic text-gray-700 dark:text-gray-300">
              "Everything went pretty well. I didn't have to explain anything. They figured out what I needed and delivered only in 2 days. Ridiculously fast lol. Highly recommended."
            </p>
            <p className="mt-4 text-right text-gray-500 dark:text-gray-400 font-semibold">
              - an NLP Project, Pakistani Client
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-l-xl p-6 flex flex-col justify-between">
            <p className="text-lg italic text-gray-700 dark:text-gray-300">
              "Unbelievably helpful, I cannot even express how great the conversation was. AI Takeover understands reinforcement learning at both the technical/math level and the social/human level. Such a great startup to work with, I highly recommend."
            </p>
            <p className="mt-4 text-right text-gray-500 dark:text-gray-400 font-semibold">
              - A consultancy project
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
