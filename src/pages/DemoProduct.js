import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import emailjs from 'emailjs-com';

const DemoProduct = (props) => {
    useDocTitle('AI Takeover - Demo our products');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [demoProducts, setDemoProducts] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        setErrors((prev) => ({ ...prev, products: '' }));

        if (checked) {
            setDemoProducts((prev) => [...prev, value]);
        } else {
            setDemoProducts((prev) => prev.filter((product) => product !== value));
        }
    };

    const clearErrors = () => {
        setErrors([]);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        Notiflix.Loading.circle('Sending your message...'); // Showing a loading indicator

        emailjs
            .sendForm('outlook', 'template_el54mod', e.target, 'jw34NYhhi2ygpeFH6')
            .then(
                (result) => {
                    console.log('Email Sent Successfully:', result.text);
                    Notiflix.Loading.remove();
                    Notiflix.Report.success(
                        'Message Sent',
                        'Thanks for sending a message, we\'ll be in touch soon.',
                        'Okay'
                    );
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPhone('');
                    setMessage(''); 
                },
                (error) => {
                    console.error('Email Sending Error:', error.text);
                    Notiflix.Loading.remove();
                    Notiflix.Report.failure(
                        'Error',
                        'An error occurred while sending the message. Please try again.',
                        'Okay'
                    );
                }
            );
            setDemoProducts([]);
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id="demo" className="flex justify-center items-center mt-8 w-full bg-white dark:bg-gray-900 py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-white dark:bg-gray-800 dark:text-gray-100 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-[#21314f] dark:text-white uppercase text-4xl">
                                    Demo our Projects
                                </h1>
                            </div>
                            <div className="flex items-center my-4">
                                <input
                                    id="checkbox-1"
                                    type="checkbox"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600"
                                    value="Twitter Bot for Cryptocurrency Trends"
                                    onChange={handleChange}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
                                    Twitter Bot for Cryptocurrency Trends
                                </label>
                            </div>
                            <div className="flex items-center my-4">
                                <input
                                    id="checkbox-2"
                                    type="checkbox"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600"
                                    value="Reinforcement Learning Optimization in Agricultural Technology"
                                    onChange={handleChange}
                                />
                                <label htmlFor="checkbox-2" className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
                                    Reinforcement Learning Optimization in Agricultural Technology
                                </label>
                            </div>
                            <div className="flex items-center my-4">
                                <input
                                    id="checkbox-3"
                                    type="checkbox"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600"
                                    value="Legal Chatbot for Pakistani Law"
                                    onChange={handleChange}
                                />
                                <label htmlFor="checkbox-3" className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
                                    Legal Chatbot for Pakistani Law
                                </label>
                            </div>
                            {errors.products && (
                                <p className="text-red-500 text-sm">{errors.products}</p>
                            )}
                            <input
                                type="hidden"
                                name="demoProducts"
                                value={demoProducts.join(', ')} // Serialize selected products
                            />
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.first_name && (
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.last_name && (
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.phone_number && (
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    )}
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                )}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-[#21314f] hover:bg-blue-900 text-gray-100 dark:text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DemoProduct;