import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="dark:bg-gray-800 py-8" id="portfolio">
            
            <h2 className="my-4 text-center text-3xl text-[#21314f] dark:text-gray-100 uppercase font-bold">Past Projects</h2>
            
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900 dark:border-blue-900 mb-8"></div>
            </div>

            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                    {/* Project Card 1 */}
                    <div className="bg-white dark:bg-gray-700 transition-all ease-in-out duration-400 overflow-hidden text-gray-700 dark:text-gray-300 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12 dark:text-gray-100">Twitter Bot for Cryptocurrency Trends</h4>
                            
                            <p className="text-md font-sans leading-5 h-auto md:h-48 mt-10">
                                Development of a sophisticated Twitter bot that scans tweets related to cryptocurrencies, identifies emerging trends, and combines this data with technical analysis. The bot generates insightful tweets styled after Michael Burry, presenting market trends in a compelling and engaging manner. These tweets are then automatically posted on Twitter, providing real-time updates for cryptocurrency enthusiasts.
                            </p>
                            
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/get-demo#demo"
                                    className="text-white bg-[#21314f] dark:bg-[#21314f] dark:hover:bg-blue-800 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl" >
                                    Schedule Demo
                                    
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor" >
                                        
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd" >
                                        </path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-white dark:bg-gray-700 transition-all ease-in-out duration-400 overflow-hidden text-gray-700 dark:text-gray-300 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12 dark:text-gray-100">Reinforcement Learning Optimization in Agricultural Technology</h4>
                            
                            <p className="text-md leading-5 h-auto md:h-48 font-sans mt-10">
                                Designed a machine learning model utilizing reinforcement learning to optimize decision-making in agricultural planning. The model analyzed factors such as timing and location to determine optimal tree-planting strategies. By running extensive simulations, the system identified policies that reduced costs by 30%, significantly improving efficiency and productivity in agricultural operations.
                            </p>
                            
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/get-demo#demo"
                                    className="text-white bg-[#21314f] dark:bg-[#21314f] dark:hover:bg-blue-800 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Schedule Demo
                                    
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor" >
                                        
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd" >
                                        </path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-white dark:bg-gray-700 transition-all ease-in-out duration-400 overflow-hidden text-gray-700 dark:text-gray-300 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12 dark:text-gray-100">Legal Chatbot for Pakistani Law</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48 mt-10">
                                Created a legal chatbot tailored for Pakistani law. The chatbot was developed as a Retrieval-Augmented Generation (RAG) application with a comprehensive database of Pakistani legal statutes. It assists users in conducting legal research and provides accurate, context-aware answers to questions about the law, streamlining access to legal information for professionals and individuals alike.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/get-demo#demo"
                                    className="text-white bg-[#21314f] dark:bg-[#21314f] dark:hover:bg-blue-800 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Schedule Demo
                                    
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor" >
                                        
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"  >
                                        </path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
