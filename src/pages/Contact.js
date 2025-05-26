import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix'; 

const Contact = () => {
    useDocTitle('AI Takeover - Send us a message')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    // const clearInput = () => {
    //     setFirstName('')
    //     setLastName('')
    //     setEmail('')
    //     setPhone('')
    //     setMessage('')
    // }

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     document.getElementById('submitBtn').disabled = true;
    //     document.getElementById('submitBtn').innerHTML = 'Loading...';
        
    //     let fData = new FormData();
    //     fData.append('first_name', firstName)
    //     fData.append('last_name', lastName)
    //     fData.append('email', email)
    //     fData.append('phone_number', phone)
    //     fData.append('message', message)

    //     axios({
    //         method: "post",
    //         url: process.env.REACT_APP_CONTACT_API,
    //         data: fData,
    //         headers: {
    //             'Content-Type':  'multipart/form-data'
    //         }
    //     })
    //     .then(function (response) {
    //         document.getElementById('submitBtn').disabled = false;
    //         document.getElementById('submitBtn').innerHTML = 'send message';
    //         clearInput()
    //         //handle success
    //         Notiflix.Report.success(
    //             'Success',
    //             response.data.message,
    //             'Okay',
    //         );
    //     })
    //     .catch(function (error) {
    //         document.getElementById('submitBtn').disabled = false;
    //         document.getElementById('submitBtn').innerHTML = 'send message';
    //         //handle error
    //         const { response } = error;
    //         if(response.status === 500) {
    //             Notiflix.Report.failure(
    //                 'An error occurred',
    //                 response.data.message,
    //                 'Okay',
    //             );
    //         }
    //         if(response.data.errors !== null) {
    //             setErrors(response.data.errors)
    //         }
            
    //     });

    function sendEmail(e) {
        e.preventDefault();

        Notiflix.Loading.circle('Sending your message...'); // Showing a loading indicator

        emailjs
            .sendForm('outlook', 'template_26f5s28', e.target, 'jw34NYhhi2ygpeFH6')
            .then(
                (result) => {
                    console.log('Email Sent Successfully:', result.text);
                    Notiflix.Loading.remove();
                    Notiflix.Report.success(
                        'Message Sent',
                        'Thanks for sending a message, we\'ll be in touch soon.',
                        'Okay'
                    );
                    e.target.reset(); // Reset form fields after successful submission
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
    }

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white dark:bg-gray-900 py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white dark:bg-gray-800 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-[#21314f] dark:text-white uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}   
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    }
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && 
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                }
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-[#21314f] hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-[#21314f] hover:bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">Lahore, Pakistan (Remote Setting)</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: 0334-8478886</p>
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">25100320@lums.edu.pk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;