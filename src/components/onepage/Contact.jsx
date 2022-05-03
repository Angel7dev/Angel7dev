import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        emailjs.sendForm('Personal_Email', 'template_falg43x', form.current, process.env.REACT_APP_USER_ID_MAIL)
            .then((result) => {
                console.log(result.text);
                alert(`success, your message will be answered soon `)
            }, (error) => {
                console.log(error.text);
            });
        e.preventDefault();
        e.target.reset();

    };
    return (

        <div className="w-full bg-stale-900  pb-16  mx-auto" id="contacto">
            <div className="bg-gradient-to-b from-teal-900 to-sky-900  h-96"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="bg-gray-900 w-full shadow shadow-slate-600 rounded-xl p-8 sm:p-12 -mt-72">
                    <p className="text-3xl font-bold leading-none text-center text-white">Contact me</p>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="md:flex items-center mt-12">

                            <div className="w-full flex flex-col mt-4">
                                <label className="font-semibold leading-none">Email</label>
                                <input type="email" name="from_email" required
                                    className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none ">Subject</label>
                                <input type="text" name="subject" required
                                    className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                            </div>

                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none ">Message</label>
                                <textarea type="text" name="message" required
                                    className="h-40 text-base leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button
                                className="mt-9 py-4 px-10 text-xl font-bold
                                bg-blue-700 hover:bg-blue-300 hover:text-sky-900 border rounded-xl       
                                ">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact