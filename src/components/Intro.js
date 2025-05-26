import React from 'react';
import img from '../images/Web-developer.svg';

const Intro = () => {
    return (
        <>
            <div className="dark:bg-gray-800 m-auto p-2 md:p-12 h-5/6" id='about'>

                <div className=" flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    {/* Image Section */}
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="card img" className="rounded-t float-right" src={img} />
                    </div>

                    {/* Text Section */}
                    <div className="flex-col my-4 text-center lg:text-left lg:my-[66px] lg:justify-end w-full lg:w-1/2 px-8"  data-aos-delay="500">
                        
                        <h3 className="text-3xl text-[#21314f] dark:text-gray-100 font-bold">
                            We develop high quality personalized AI-integrated applications for organizations, institutions, and SMEs
                        </h3>
                        
                        <div>
                            <p className='my-3 text-xl text-gray-600 dark:text-gray-300 font-semibold'>
                                Our team is well vast in software development and is ready to help develop the applications of your choice.
                            </p>
                        </div>
                        
                        <div>
                            <p className='my-3 text-xl text-gray-600 dark:text-gray-300 font-semibold'>
                                We take responsibility for building custom software solutions that cater to automation of your business processes and improve efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;



//data-aos="zoom-in"