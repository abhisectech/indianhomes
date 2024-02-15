'use client'
import React, { useState } from 'react'

const ContactFormSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    requirement: '',
  })
  const [btnText, setBtnText] = useState('Submit')

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
    
    
    
  return (
    <section className="py-12 bg-gray-100 md:px-28">
      <div className="container mx-auto flex sm:flex-row flex-col items-center w-2/3">
        {/* Left Image */}
        <div className="sm:w-1/3 w-full sm:pr-8 p-2 ">
          <img
            src="/images/contact-form.avif" // Replace with the path to your image
            alt="Contact Form"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Right Form */}
        <form
          method="post"
          onSubmit={handleSubmit}
          className="sm:w-2/3 w-full  sm:pl-8 p-2"
        >
          <div className="">
            <h2 className="text-3xl font-bold mb-6 uppercase">Contact Us</h2>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Column */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Number
                </label>
                <input
                  id="number"
                  type="text"
                  name='number'
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Second Column */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  I am Interested in
                </label>
                <select
                  id="requirement"
                  name='requirement'
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="Planning">Kitchen Planning</option>
                  <option value="Designing">Kitchen Designing</option>
                  <option value="Renovation">Kitchen Renovation</option>
                  <option value="NewKitchen">New Modular Kitchen</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mt-4">
                Message
              </label>
              <textarea
                rows="3"
                id="message"
                name='message'
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-green-500 text-white w-full hover:bg-green-600 rounded-full focus:outline-none focus:ring focus:border-green-300"
              >
               
                {btnText}
              </button>
            </div>

            {/* Submit Button */}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
