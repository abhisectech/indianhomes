'use client'
import React, { useState } from 'react'

const CustomerReviewSection = () => {
  const MAX_CHARACTERS = 120 // Maximum characters to display before truncating

  //   const [expandedReviews, setExpandedReviews] = useState([])
  const [expandedReviews, setExpandedReviews] = useState(null)
  const handleReadMoreToggle = (customerId) => {
    setExpandedReviews((prevExpanded) =>
      prevExpanded === customerId ? null : customerId
    )
  }
  const customerData = [
    {
      id: 1,
      name: 'Reena Batra',
      photo: '/images/customer1.jpg', // Replace with the actual path to customer photo
      comment:
        'Design Indian Kitchen made my beautiful bathroom Vanities, extensively elegant wardrobes and the Kitchen which actually tastes good, my guests always compliment us for the beautiful decor of home which is represented by the designs and ideas from the highly efficient team. Perfect job !',
    },
    {
      id: 2,
      name: 'Sandeep Verma',
      photo: '/images/customer2.jpg', // Replace with the actual path to customer photo
      comment:
        'You come up with the beautiful ideas and designs, it really amazes me how you could completely meet my expectations and everything has been done within such a short time span, I am grateful to have chosen you to work in my house. Loved your suggestions too.',
    },
    {
      id: 3,
      name: 'Sandeep Verma',
      photo: '/images/customer2.jpg', // Replace with the actual path to customer photo
      comment:
        'You come up with the beautiful ideas and designs, it really amazes me how you could completely meet my expectations and everything has been done within such a short time span, I am grateful to have chosen you to work in my house. Loved your suggestions too.',
    },
    {
      id: 4,
      name: 'Sandeep Verma',
      photo: '/images/customer2.jpg', // Replace with the actual path to customer photo
      comment:
        'You come up with the beautiful ideas and designs, it really amazes me how you could completely meet my expectations and everything has been done within such a short time span, I am grateful to have chosen you to work in my house. Loved your suggestions too.',
    },
    {
      id: 5,
      name: 'Sandeep Verma',
      photo: '/images/customer2.jpg', // Replace with the actual path to customer photo
      comment:
        'You come up with the beautiful ideas and designs, it really amazes me how you could completely meet my expectations and everything has been done within such a short time span, I am grateful to have chosen you to work in my house. Loved your suggestions too.',
    },
    // Add more customer data as needed
  ]

  return (
    <section className="bg-gray-100 py-12 px-8">
      <div className="container mx-auto">
        <h2 className="sm:text-4xl uppercase font-bold text-center mb-8">
          CUSTOMERS RECOMMENDATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerData.map((customer) => (
            <div
              key={customer.id}
              className={`bg-white p-6 rounded-lg shadow-md ${
                expandedReviews === customer.id
                  ? 'h-auto'
                  : 'h-auto md:h-[350px]'
              }`}
            >
              <img
                src={customer.photo} // Replace with the actual path to customer photo
                alt={customer.name}
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-800 text-center font-semibold">
                {customer.name}
              </p>
              <p className="text-gray-600 text-center">
                {expandedReviews === customer.id
                  ? customer.comment
                  : `${customer.comment.slice(0, MAX_CHARACTERS)}${
                      customer.comment.length > MAX_CHARACTERS ? '...' : ''
                    }`}
              </p>
              {customer.comment.length > MAX_CHARACTERS && (
                <div className="flex justify-center items-center">
                  <button
                    className="text-green-500 hover:bg-green-500 hover:text-white border border-green-500 px-3 py-1 rounded mt-2 transition-all duration-300 ease-in-out"
                    onClick={() => handleReadMoreToggle(customer.id)}
                  >
                    {expandedReviews === customer.id
                      ? 'Read Less'
                      : 'Read More'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviewSection
