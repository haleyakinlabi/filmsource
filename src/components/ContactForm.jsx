import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="container mx-auto" id='movies'>
            <h1 className="text-2xl text-white font-medium mb-4 text-center p-3 " id='contactUS'>
                Contact Us
            </h1>
            <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-md">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <label htmlFor="email" className="block mt-4 mb-2 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <label htmlFor="message" className="block mt-4 mb-2 font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        rows="4"
                    />
                    <button
                        type="submit"
                        style={{
                            background: 'linear-gradient(to right, #9860be, #e8a0da, rgb(233, 16, 164), rgb(1, 1, 73))'
                        }}
                        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
