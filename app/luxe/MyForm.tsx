'use client'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'

interface MyFormProps {}

const MyForm: React.FC<MyFormProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add your form submission logic here
  }

  return (
    <>
      <MaxWidthWrapper className="bg-amber-50">
        <div className="mb-12 mt-8 sm:mt-48 p-8 text-center">
          <h1 className="text-4xl font-semibold mb-4 text-gray-700">
            Exclusively You.
          </h1>
          <h3 className="text-xl text-gray-700">
            From timeless classics to modern masterpieces, at HomeLane Luxe,{' '}
            <br /> we curate homes that are “Exclusively You”
          </h3>
        </div>
        <div className=" p-8 flex flex-col sm:flex-row  bg-amber-50">
          {/* Left side with heading and paragraph */}
          <div className="sm:w-1/2 p-4">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-sky-700">
              Looking for expert guidance to design your{' '}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'kitchen?',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'bedroom?',
                  1000,
                  'bathroom?',
                  1000,
                  'guest room?',
                  1000,
                  'living room?',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ color: 'purple', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-700 text-sm">
              Leave your information and we will call you to book your preferred
              consultation slot
            </p>
          </div>

          {/* Right side with the form */}
          <div className="sm:w-1/2 p-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email ID*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="agree" className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">
                    Yes, I would like to receive important updates and
                    notifications on WhatsApp
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-3xl flex items-center justify-center hover:bg-blue-600 mt-4 sm:mt-0"
              >
                Book Free Site Visit <ChevronRight className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default MyForm
