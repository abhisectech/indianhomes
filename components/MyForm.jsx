'use client';
import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react';
import Typed from 'typed.js'


const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    pincode: '',
    agree: '',
  })
  const [btnText, setBtnText] = useState('Book free site Visit')
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
  
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    
  
    try {
      console.log('Form Data to Send:', Object.fromEntries(formDataToSend.entries()));
      console.log('Uploading data...');
      const response = await fetch('https://m.designindianhomes.com/submitForm', {
        method: 'POST',
        body: formDataToSend,
      });
  
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      console.log('Response body:', await response.text());
  
      if (response.ok) {
        console.log('Form data submitted successfully!');
        console.log('Form Data to Send:', Object.fromEntries(formDataToSend.entries()));
        setBtnText('Done');
      } else {
        console.error('Form data submission failed. Response:', response);
        setBtnText('Something Went Wrong');
      }
    } catch (error) {
      console.error('Error during form data submission:', error);
      setBtnText('Something Went Wrong');
    }
  };

  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       'kitchen?',
  //       'bedroom?',
  //       'bathroom?',
  //       'guest room?',
  //       'living room?',
  //     ],
  //     typeSpeed: 100,
  //     loop: true,
  //     loopCount: Infinity,
  //   });
  // });


  return (
    <div className="flex flex-col sm:flex-row lg:mx-16">
      {/* Left side with heading and paragraph */}
      <div className="sm:w-1/2 p-4">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
          Looking for expert guidance to design your <br />
          <span  className="text-yellow-300" />
        </h1>
        <p className="text-gray-900 text-sm">
          Leave your information and we will call you to book your preferred
          consultation slot
        </p>
      </div>

      {/* Right side with the form */}
      <div className="sm:w-1/2 p-4">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email ID*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-900"
            >
              Mobile Number*
            </label>
            <input
              type="tel"
              id="number"
              onChange={handleChange}
              name="number"
              className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium text-gray-900"
            >
              Pincode*
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="agree" className="flex items-center">
              <input type="checkbox" id="agree" name="agree" className="mr-2" onChange={handleChange} />
              <span className="text-sm text-gray-900">
                Yes, I would like to receive important updates and notifications
                on WhatsApp
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white flex justify-center items-center "
          >
            {btnText} <ChevronRight className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MyForm