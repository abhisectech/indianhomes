'use client'
import React from 'react'

const ContactFormSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit clicked')

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      message: document.getElementById('message').value,
      requirement: document.getElementById('requirement').value,
    }
    const recipientEmail = 'saurabhbehal@gmail.com'
    const emailData = `
        Name: ${formData.name},
        Email: ${formData.email},
        Mobile: ${formData.phone},
        Date: ${formData.date},
        Message: ${formData.message},
        Looking For: ${formData.requirement},
    `
    const mailtoLink = `mailto:${recipientEmail}?subject=New Design Session Enquiry&body=${encodeURIComponent(
      emailData ?? null
    )}`
    // window.location.href = mailtoLink
    window.open(mailtoLink, '_blank')
  }
  return (
    <section className="py-12 bg-gray-100 md:px-28">
      <div className="container mx-auto flex sm:flex-row flex-col items-center justify-center">
        {/* Left Image */}
        <div className="sm:pr-8 pb-4 sm:pb-0">
          <img
            src="/images/why-choose-us-form-removebg-preview.png" // Replace with the path to your image
            alt="Contact Form"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Right Form */}
        <form method="post" onSubmit={handleSubmit} className=" sm:pl-8">
          <div className="">
            <h2 className="text-3xl text-red-500 font-bold mb-6 uppercase">
              Contact Us
            </h2>

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
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Select a Date
                </label>
                <input
                  id="date"
                  type="date"
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
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  I am Interested in
                </label>
                <select
                  id="requirement"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="Planning">Kitchen Planning</option>
                  <option value="Designing">Kitchen Designing</option>
                  <option value="Renovation">Kitchen Renovation</option>
                  <option value="NewKitchen">New Modular Kitchen</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="1"
                  id="message"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-green-500 text-white w-full hover:bg-green-600 rounded-full focus:outline-none focus:ring focus:border-green-300"
              >
                Submit
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
