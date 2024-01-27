'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import emailjs from 'emailjs-com';
import Typed from 'typed.js'
interface MyFormProps {}

const MyForm: React.FC<MyFormProps> = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'kitchen?',
        'bedroom?',
        'bathroom?',
        'guest room?',
        'living room?',
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit clicked');

    const formData = {
      name: (document.getElementById('fullName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('mobileNumber') as HTMLInputElement)
        .value,
      pincode: (document.getElementById('pincode') as HTMLInputElement).value,
      agreeToUpdates: (document.getElementById('agree') as HTMLInputElement)
        .checked,
    };

    const emailParams = {
      from_name: formData.name,
      reply_to: formData.email,
      mobile_number: formData.phone,
      pincode: formData.pincode,
      agree_to_updates: formData.agreeToUpdates ? 'Yes' : 'No',
    };

    const serviceId = 'service_lfo5kwt';
    const templateId = 'template_ef96whn';
    const userId = 'mDNDZk1yoZjcCC39e';

    try {
      const response = await emailjs.send(serviceId, templateId, emailParams, userId);
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <div className="flex flex-col sm:flex-row lg:mx-16">
      {/* Left side with heading and paragraph */}
      <div className="sm:w-1/2 p-4">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
          Looking for expert guidance to design your <br />
          <span ref={el} className="text-yellow-300" />
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
              id="fullName"
              name="fullName"
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
              id="mobileNumber"
              name="mobileNumber"
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
              className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="agree" className="flex items-center">
              <input type="checkbox" id="agree" name="agree" className="mr-2" />
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
            Book Free Site Visit <ChevronRight className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MyForm